var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();

var app = builder.Build();

app.UseCors(p => p
.AllowAnyOrigin()
.AllowAnyMethod()
.AllowAnyHeader()
);

app.MapGet("/api/dashboard/getTotalBackupsCount", () =>
{
    app.Logger.LogInformation("Processing (getTotalBackupsCount) Endpoint...");

    var rand = new Random();

    return Results.Ok(new
    {
        count = rand.Next(1000, 10000)
    });
});

app.Run();
