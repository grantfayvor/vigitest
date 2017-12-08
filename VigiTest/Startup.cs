using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(VigiTest.Startup))]
namespace VigiTest
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
