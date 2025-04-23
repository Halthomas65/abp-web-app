using System;
using Volo.Abp.Data;
using Volo.Abp.Modularity;
using Volo.Abp.Uow;

namespace AbpSolution1.MongoDB;

[DependsOn(
    typeof(AbpSolution1ApplicationTestModule),
    typeof(AbpSolution1MongoDbModule)
)]
public class AbpSolution1MongoDbTestModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpDbConnectionOptions>(options =>
        {
            options.ConnectionStrings.Default = AbpSolution1MongoDbFixture.GetRandomConnectionString();
        });
    }
}
