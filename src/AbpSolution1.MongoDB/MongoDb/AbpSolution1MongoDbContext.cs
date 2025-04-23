using Volo.Abp.Data;
using Volo.Abp.MongoDB;
using MongoDB.Driver;
using AbpSolution1.Books;

namespace AbpSolution1.MongoDB;

[ConnectionStringName("Default")]
public class AbpSolution1MongoDbContext : AbpMongoDbContext
{

    /* Add mongo collections here. Example:
     * public IMongoCollection<Question> Questions => Collection<Question>();
     */
    
    public IMongoCollection<Book> Books => Collection<Book>();

    protected override void CreateModel(IMongoModelBuilder modelBuilder)
    {
        base.CreateModel(modelBuilder);

        //builder.Entity<YourEntity>(b =>
        //{
        //    //...
        //});
    }
}
