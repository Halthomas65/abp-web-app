using AbpSolution1.MongoDB;
using AbpSolution1.Samples;
using Xunit;

namespace AbpSolution1.MongoDb.Applications;

[Collection(AbpSolution1TestConsts.CollectionDefinitionName)]
public class MongoDBSampleAppServiceTests : SampleAppServiceTests<AbpSolution1MongoDbTestModule>
{

}
