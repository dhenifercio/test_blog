import Image from "next/image";
import reuniao from "../assets/reuniao.webp";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import ia from "../assets/ia.jpg";

export default function HomeBody() {
  return (
    <>
      <div className="flex">
        <div className=" ml-10 mt-10">
          <h1 className=" text-xs font-bold ">CASO DE FUTURO</h1>
          <Image alt="reuniao" src={reuniao} width={800} height={600} />
          <div className="max-w-[800px]">
            <p className="mt-5 text-2xl font-serif">
              {" "}
              Inteligência Artificial (IA) e Aprendizado de Máquina
            </p>
            <p className="mt-5 text-base font-serif">
              {" "}
              A IA generativa está ganhando destaque por permitir que as
              máquinas criem conteúdo semelhante ao humano, como texto, imagens
              e música. 
            </p>
            <p className="font-light text-xs mt-2">Agosto 08, 2024 - 8min</p>
            <div className="flex space-x-4">
              <div className="bg-lime-800 w-40 h-7 mt-5 bg-opacity-40">
                <h1 className="text-sm text-center font-light text-black">
                  GERADO POR IA
                </h1>
              </div>
              <div className="bg-lime-800 w-40 h-7 mt-5 bg-opacity-40">
                <h1 className="text-sm text-center font-light text-black">
                  INOVAÇÃO DIGITAL
                </h1>
              </div>
            </div>
            <Separator className="mt-10" />
          </div>
        </div>

        <div className=" flex p-2 ml-10 mt-14 w-28">
          <Separator orientation="vertical" className="" />

          <div className=" ml-10 mt-3">
            <h1 className=" text-xs font-bold ">FUTURO</h1>
            <div className="max-w-[800px]">
              <p className="mt-5 text-2xl font-serif">
                {" "}
                Inteligência Artificial (IA) e Aprendizado de Máquina
              </p>
              <p className="mt-5 text-base font-serif"> Autor: John Silva</p>
              <p className="font-light text-xs mt-2">Agosto 08, 2024 - 8min</p>
              <div className="flex space-x-4">
                <div className="bg-lime-800 w-40 h-7 mt-5 bg-opacity-40">
                  <h1 className="text-sm text-center font-light text-black">
                    GERADO POR IA
                  </h1>
                </div>
                <div className="bg-lime-800 w-40 h-7 mt-5 bg-opacity-40">
                  <h1 className="text-sm text-center font-light text-black">
                    INOVAÇÃO DIGITAL
                  </h1>
                </div>
              </div>
            </div>
            <Separator className="mt-7" />
            <div className="mt-5">
              <h1 className=" text-xs font-bold ">FUTURO</h1>
              <div className="max-w-[800px]">
                <p className="mt-5 text-2xl font-serif">
                  {" "}
                  Inteligência Artificial (IA) e Aprendizado de Máquina
                </p>
                <p className="mt-5 text-base font-serif"> Autor: John Silva</p>
                <p className="font-light text-xs mt-2">
                  Agosto 08, 2024 - 8min
                </p>
                <div className="flex space-x-4">
                  <div className="bg-lime-800 w-40 h-7 mt-5 bg-opacity-40">
                    <h1 className="text-sm text-center font-light text-black">
                      GERADO POR IA
                    </h1>
                  </div>
                  <div className="bg-lime-800 w-40 h-7 mt-5 bg-opacity-40">
                    <h1 className="text-sm text-center font-light text-black">
                      INOVAÇÃO DIGITAL
                    </h1>
                  </div>
                </div>
              </div>
              <Button className="mt-7 ml-96 bg-lime-950 bg-opacity-60 rounded-full">
                LER MAIS
              </Button>
              <Separator className="mt-7" />
            </div>
          </div>
        </div>
      </div>

      <div className="ml-10 mt-5">
        <p className="text-4xl font-serif">DEMO</p>
        <div className="mt-10 mr-10 pt-4 pl-4 pb-4 bg-lime-950 bg-opacity-40 rounded-lg">
          <div className="flex justify-between">
            <div>
              <h1 className="text-xs font-bold ">FUTURO</h1>
              <div className="max-w-[800px]">
                <p className="mt-5 text-2xl font-serif">
                  {" "}
                  Inteligência Artificial (IA) e Aprendizado de Máquina
                </p>
                <p className="mt-5 text-base font-serif">
                  {" "}
                  A IA generativa está ganhando destaque por permitir que as
                  máquinas criem conteúdo semelhante ao humano, como texto,
                  imagens e música. 
                </p>
                <p className="mt-5 text-base font-serif"> Autor: John Silva</p>
                <p className="font-light text-xs mt-2">
                  Agosto 08, 2024 - 8min
                </p>
                <div className="flex space-x-4">
                  <div className="bg-lime-800 w-40 h-7 mt-5 bg-opacity-40">
                    <h1 className="text-sm text-center font-light text-black">
                      GERADO POR IA
                    </h1>
                  </div>
                  <div className="bg-lime-800 w-40 h-7 mt-5 bg-opacity-40">
                    <h1 className="text-sm text-center font-light text-black">
                      INOVAÇÃO DIGITAL
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-4 pr-4 opacity-50">
              <Image alt="ia" src={ia} width={400} height={300} />
            </div>
          </div>
        </div>
      </div>

      <div className="ml-10 mt-6 mr-5 mb-10">
        <div className="flex mb-5 ">
          <div className="flex justify-between">
            <div>
              <p className="mt-5 text font-serif">
                {" "}
                A IA generativa está ganhando destaque por{" "}
              </p>

              <p className="mt-5 text-base font-serif"> Autor: John Silva</p>
              <p className="font-light text-xs mt-2">Agosto 08, 2024 - 8min</p>
              <div className="flex space-x-4">
                <div className="mb-5 bg-lime-800 w-40 h-7 mt-5 bg-opacity-40">
                  <h1 className="text-sm text-center font-light text-black">
                    GERADO POR IA
                  </h1>
                </div>
              </div>
            </div>
            <div className="mt-6 ml-4 pr-4 opacity-50">
              <Image alt="ia" src={ia} width={400} height={300} />
            </div>
            <Separator orientation="vertical" />
          </div>

          <div className="ml-10 flex justify-between">
            <div>
              <p className="mt-5 text font-serif">
                {" "}
                A IA generativa está ganhando destaque por{" "}
              </p>

              <p className="mt-5 text-base font-serif"> Autor: John Silva</p>
              <p className="font-light text-xs mt-2">Agosto 08, 2024 - 8min</p>
              <div className="flex space-x-4">
                <div className="bg-lime-800 w-40 h-7 mt-5 bg-opacity-40">
                  <h1 className="text-sm text-center font-light text-black">
                    GERADO POR IA
                  </h1>
                </div>
              </div>
            </div>
            <div className="mt-6 ml-4 pr-4 opacity-50">
              <Image alt="ia" src={ia} width={400} height={300} />
            </div>
            <Separator orientation="vertical" />
          </div>

          <div className="ml-10 flex justify-between">
            <div>
              <p className="mt-5 text font-serif">
                {" "}
                A IA generativa está ganhando destaque por{" "}
              </p>

              <p className="mt-5 text-base font-serif"> Autor: John Silva</p>
              <p className="font-light text-xs mt-2">Agosto 08, 2024 - 8min</p>
              <div className="flex space-x-4">
                <div className="bg-lime-800 w-40 h-7 mt-5 bg-opacity-40">
                  <h1 className="text-sm text-center font-light text-black">
                    GERADO POR IA
                  </h1>
                </div>
              </div>
            </div>
            <div className="mt-6 ml-4 pr-4 opacity-50">
              <Image alt="ia" src={ia} width={400} height={300} />
            </div>
          </div>
        </div>
        <Separator />
      </div>

      <div className="ml-10 mr-10">
      <p className="text-4xl font-serif">EXPLORAR TÓPICOS</p>
      <div className="flex justify-between mt-5">
        <Button className="size-20 min-w-40 mt-7 bg-lime-950 bg-opacity-60">IA</Button>
        <Button className="size-20 min-w-60 mt-7 bg-lime-950 bg-opacity-60">Tecnologia</Button>
        <Button className="size-20 min-w-60 mt-7 bg-lime-950 bg-opacity-60">Futuro</Button>
        <Button className="size-20 min-w-80 mt-7 bg-lime-950 bg-opacity-60">Gerador de IA</Button>
        <Button className="size-20 min-w-80 mt-7 bg-lime-950 bg-opacity-60">Data Center</Button>
      </div>
      <div className="flex justify-between ">
        <Button className="size-20 min-w-60 mt-7 bg-lime-950 bg-opacity-60">Tecnologia</Button>
        <Button className="size-20 min-w-80 mt-7 bg-lime-950 bg-opacity-60">Data Center</Button>
      <Button className="size-20 min-w-60 mt-7 bg-lime-950 bg-opacity-60">Futuro</Button>
        <Button className="size-20 min-w-40 mt-7 bg-lime-950 bg-opacity-60">IA</Button>
       <Button className="size-20 min-w-80 mt-7 bg-lime-950 bg-opacity-60">Gerador de IA</Button>
         </div>
      </div>
    </>
  );
}
