using AbpSolution1.MongoDB;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace AbpSolution1.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(AbpSolution1MongoDbModule),
    typeof(AbpSolution1ApplicationContractsModule)
)]
public class AbpSolution1DbMigratorModule : AbpModule
{
}
