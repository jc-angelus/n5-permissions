namespace N5.Permissions.Domain.Entities
{
    /// <summary>
    /// Developer: Johans Cuellar
    /// Date: 07/26/2024
    /// </summary>
    public class Permission
    {
        public int Id { get; set; }
        public string NameEmployee { get; set; } = null!;        
        public string SurnameEmployee { get; set; } = null!;
        public DateTime PermissionDate { get; set; }
        public int PermissionTypeId { get; set; }        
        public virtual PermissionType PermissionType { get; set; } = null!;
    }
}
