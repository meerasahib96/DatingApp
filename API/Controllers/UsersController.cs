using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[Authorize]
public class UsersController : BaseApiController
{
    private readonly DatabaseContext _context;

    public UsersController(DatabaseContext context){
        _context = context;
    }
    [HttpGet]
    public async  Task<ActionResult<IEnumerable<AppUser>>> GetUsers(){
        var users = await _context.Users.ToListAsync();
        return users;
    }
     [HttpGet("{id}")]
    public async Task<ActionResult<AppUser>> GetUser(int id){
       return await _context.Users.FindAsync(id);
        
 }
}
