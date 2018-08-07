using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Alturas;

namespace APIAlturas.Controllers
{
    [Route("api/[controller]")]
    public class ConversorAlturasController : Controller
    {

        //novo Paula
        [HttpGet("PesMetros/{pes}")]
        public object Get(double pes)
        {
            return new 
            {
                alturaPes = pes,  
                alturaMetros = ConversorAlturas.PesParaMetros(pes)


            };
        }
        //fim novo Paula


        /*
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
        */
    }
}
