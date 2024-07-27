using Microsoft.EntityFrameworkCore;
using N5.Permissions.Application;
using N5.Permissions.Infrastructure;
using N5.Permissions.Infrastructure.Persistence;
using N5.Permissions.Shared.Kafka;
using N5.Permissions.Domain.Entities;

namespace N5.Permissions.Presentation
{
    /// <summary>
    /// Developer: Johans Cuellar
    /// Date: 07/26/2024
    /// </summary>
    public static class Program
    {
        private static async Task Main(string[] args)
        {
            var nombrePoliticaCors = "_myAllowSpecificOrigins";
            var builder = WebApplication.CreateBuilder(args);
            var AllowHostCors = builder.Configuration["AllowHostCors"]?.Split(",");

            builder.Services
                .AddApplication()
                .AddInfrastructure(builder.Configuration)
                .AddPresentation(builder.Configuration, nombrePoliticaCors)
                .AddDbContext<PermissionDbContext>(options =>
                {
                    options.UseSqlServer();
                })
               .AddKafkaMessageBus()
               .AddKafkaProducer<string, Operation>(p =>
                {
                    p.Topic = "operations";
                    p.BootstrapServers = "localhost:9092";
                })
                .AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            using (var scope = app.Services.CreateScope())
            {
                var db = scope.ServiceProvider.GetRequiredService<PermissionDbContext>();
                db.Database.Migrate();
            }

            app.UseHttpsRedirection();
            app.UseCors(nombrePoliticaCors);
            app.UseAuthorization();
            app.MapControllers();

            await app.RunAsync();
        }
    }
}