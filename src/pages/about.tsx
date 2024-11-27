import HeroPage from "@/components/HeroPage";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] });
export default function About() {
    return (
      <div className="w-full justify-center flex">
        <div className="grid justify-around w-5/12 space-y-5 -mt-4">
            <p className="text-xl font-semibold">Hi!    👋</p>
            <p className="text-left text-lg">
                I’m Josh. I am 25, was born and raised in Phoenix AZ, went to ASU for a 
                BSE in Computer Systems Engineering, and have been a professional 
                web developer for ~2.5 years.
            </p>
            <p className="text-left text-lg">
                In that time I worked primarily in the .NET world, either developing 
                web pages in C# using .NET/Blazor at Capgemini, adding new functionality 
                in  Visual Basic using .NET Framework at Avnet, or creating API points via 
                Azure Functions (again, C#). In addition, I have had professional 
                experience building greenfield apps with React, SvelteKit, and Java.
            </p>
            <p className="text-left text-lg">
                Through my +2 years of experience, I have grown both a love and deep
                respect for developing tools that solve people’s problems. Trial and error 
                has taught me that I can actually build anything if I put my mind to it, and 
                the beauty of the internet is that I get the opportunity to distribute my 
                solutions to the entire world instantly. By the end of my career, I hope I get
                to say that the problems I worked on made people’s lives better, even if just by a little bit.
            </p>
            <p className="text-left text-lg">
                Aside from the career stuff, I like to (badly) play music, watch movies, spend
                time with friends and family, and I’m trying to get to know Jesus. Any tips on
                that last one are greatly welcome :)
            </p>
        </div>
      </div>
    );
  }