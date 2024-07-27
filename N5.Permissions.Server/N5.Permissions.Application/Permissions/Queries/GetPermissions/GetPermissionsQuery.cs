using ErrorOr;
using MediatR;
using N5.Permissions.Domain.Entities;

namespace N5.Permissions.Application.Permissions.Commands.Queries.GetPermissions
{
    /// <summary>
    /// Developer: Johans Cuellar
    /// Date: 07/26/2024
    /// </summary>
    public class GetPermissionsQuery : IRequest<ErrorOr<List<Permission>>>
    {
    }
}
