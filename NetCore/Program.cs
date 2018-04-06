using System;

namespace NetCore
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World da Paula!");
            //https://mva.microsoft.com/en-us/training-courses/asp-net-core-beginner-18153?l=VM5gy36dE_6611787171
            Console.WriteLine("\nWhat is your name?");
            var name = Console.ReadLine();
            var date = DateTime.Now;
            Console.WriteLine($"\nHello, {name}, on {date:d} at {date:t}!");
            Console.Write("\nPress any key to exit...");
            Console.ReadKey(true);
        }
    }
}
