using ErrorOr;
namespace N5.Permissions.Domain.Errors
{
    /// <summary>
    /// Developer: Johans Cuellar
    /// Date: 07/26/2024
    /// </summary>
    public static class PermissionsErrors
    {
        public readonly static Error PermissionNotFound = Error.NotFound(
            code: "Permission.NotFound",
            description: "Permission no found");

        public readonly static Error PermissionsNotFound = Error.NotFound(
            code: "Permissions.NotFound",
            description: "Permissions not found");

    }
}
