using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        Console.WriteLine("Въведи списък от числа, разделени с интервал:");
        List<double> numbers = Console.ReadLine()
                                      .Split()
                                      .Select(double.Parse)
                                      .ToList();

        // Средно аритметично
        double average = numbers.Average();

        // Мода (най-често срещано число)
        double mode = numbers
                      .GroupBy(n => n)
                      .OrderByDescending(g => g.Count())
                      .First().Key;

        // Медиана
        numbers.Sort();
        double median;
        int count = numbers.Count;
        if (count % 2 == 0)
            median = (numbers[count / 2 - 1] + numbers[count / 2]) / 2;
        else
            median = numbers[count / 2];

        Console.WriteLine($"Средно аритметично: {average:F2}");
        Console.WriteLine($"Мода: {mode}");
        Console.WriteLine($"Медиана: {median}");
    }
}


