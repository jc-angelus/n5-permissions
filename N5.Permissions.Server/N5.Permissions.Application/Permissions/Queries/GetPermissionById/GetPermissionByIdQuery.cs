using ErrorOr;
using MediatR;
using N5.Permissions.Domain.Entities;

namespace N5.Permissions.Application.Permissions.Commands.Queries.GetPermissionById 
{
    /// <summary>
    /// Developer: Johans Cuellar
    /// Date: 07/26/2024
    /// </summary>
    public class GetPermissionByIdQuery : IRequest<ErrorOr<Permission>>
    {
        public int Id { get; set; }
    }
}
