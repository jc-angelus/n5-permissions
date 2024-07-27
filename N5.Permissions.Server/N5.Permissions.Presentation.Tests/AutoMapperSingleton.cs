using AutoMapper;

namespace N5.Permissions.Presentation.Tests
{

    /// <summary>
    /// Developer: Johans Cuellar
    /// Date: 07/26/2024
    /// </summary>
    public class AutoMapperSingleton
    {
        private static IMapper _mapper = null!;
        public static IMapper Mapper
        {
            get
            {
                if (_mapper == null)
                {
                    /// Auto Mapper Configurations
                    var mappingConfig = new MapperConfiguration(mc =>
                    {
                        mc.AddMaps(typeof(Program));
                    });

                    IMapper mapper = mappingConfig.CreateMapper();
                    _mapper = mapper;
                }
                return _mapper;
            }
        }

    }
}
