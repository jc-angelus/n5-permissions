using N5.Permissions.Application.Persistence.Repositories;

namespace N5.Permissions.Application.Permissions.Persistence
{

    /// <summary>
    /// Developer: Johans Cuellar
    /// Date: 07/26/2024
    /// </summary>
    public interface IUnitOfWork
    {
        public Task Save();        
        public IPermissionRepository PermissionRepository { get; }
        public IPermissionTypeRepository PermissionTypeRepository { get; }       

    }
}


