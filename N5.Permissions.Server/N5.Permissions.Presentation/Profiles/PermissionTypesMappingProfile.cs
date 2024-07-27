using AutoMapper;
using N5.Permissions.Domain.Entities;
using N5.Permissions.Presentation.DTO;

namespace N5.Permissions.Presentation.Profiles
{
    /// <summary>
    /// Developer: Johans Cuellar
    /// Date: 07/26/2024
    /// </summary>
    public class PermissionTypesMappingProfile : Profile
    {
        public PermissionTypesMappingProfile()
        {            

            CreateMap<PermissionType, PermissionTypesResponseDto>();
            
        }
    }
}
