using AbpSolution1.Samples;
using Xunit;

namespace AbpSolution1.MongoDB.Domains;

[Collection(AbpSolution1TestConsts.CollectionDefinitionName)]
public class MongoDBSampleDomainTests : SampleDomainTests<AbpSolution1MongoDbTestModule>
{

}
