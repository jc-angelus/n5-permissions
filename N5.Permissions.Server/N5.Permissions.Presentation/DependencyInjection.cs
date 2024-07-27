using N5.Permissions.Domain.Entities;
using N5.Permissions.Shared.Kafka;

namespace N5.Permissions.Presentation
{
    /// <summary>
    /// Developer: Johans Cuellar
    /// Date: 07/26/2024
    /// </summary>
    public static class DependencyInjection
    {
        public static IServiceCollection AddPresentation(
            this IServiceCollection services,
            ConfigurationManager configuration,
            string nombrePoliticaCors)
        {
            services.AddControllers();                

            services.AddEndpointsApiExplorer();
            services.AddAutoMapper(typeof(Program));

            services.AddKafkaMessageBus();
            services.AddKafkaProducer<string, Operation>(p =>
               {
                   p.Topic = "operations";
                   p.BootstrapServers = "localhost:9092";
               });

            var AllowHostCors = configuration["AllowHostCors"]?.Split(",");
            services.AddCors(o =>
                o.AddPolicy(nombrePoliticaCors,
                    builder =>
                    {
                        builder.WithOrigins(AllowHostCors ?? [])
                        .AllowAnyMethod()
                        .AllowCredentials()
                        .AllowAnyHeader();
                    }
                )
            );

            return services;
        }
    }
}
