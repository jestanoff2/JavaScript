using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Избери режим:");
        Console.WriteLine("1 - От десетична към друга бройна система");
        Console.WriteLine("2 - От друга бройна система към десетична");

        Console.Write("Избор: ");
        string choice = Console.ReadLine();

        if (choice == "1")
        {
            Console.Write("Въведи десетично число: ");
            int decimalNumber = int.Parse(Console.ReadLine());

            Console.Write("Въведи основа (2, 8 или 16): ");
            int baseNum = int.Parse(Console.ReadLine());

            string converted = Convert.ToString(decimalNumber, baseNum);
            Console.WriteLine($"Резултат: {converted.ToUpper()}");
        }
        else if (choice == "2")
        {
            Console.Write("Въведи число: ");
            string number = Console.ReadLine();

            Console.Write("Въведи основа на това число (2, 8 или 16): ");
            int baseNum = int.Parse(Console.ReadLine());

            int decimalValue = Convert.ToInt32(number, baseNum);
            Console.WriteLine($"Десетично: {decimalValue}");
        }
        else
        {
            Console.WriteLine("Невалиден избор.");
        }
    }
}

