﻿using System;

namespace Alturas
{
    public class ConversorAlturas
    {
        public static double PesParaMetros(double altura)
        {
            return Math.Round(altura * 0.3048, 4);
        }
    }
}
