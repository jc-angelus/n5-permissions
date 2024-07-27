using ErrorOr;
using MediatR;
using N5.Permissions.Domain.Entities;

namespace N5.Permissions.Application.PermissionTypes.Queries.GetPermissionTypes
{
    /// <summary>
    /// Developer: Johans Cuellar
    /// Date: 07/26/2024
    /// </summary>
    public class GetPermissionTypesQuery : IRequest<ErrorOr<List<PermissionType>>>
    {        
    }
}
