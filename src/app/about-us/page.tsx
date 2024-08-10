import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      <div className="bg-pink-50 px-4 justify-between flex flex-col">
        <div className="w-full flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold text-center text-gray-700 mt-10">
            Hakkımızda
          </h1>
        </div>
        <div className="lg:flex flex-row items-center justify-between mt-4">
          <Image src="/woman.png" alt="about-us" width={500} height={500} />
          <p className="text-slate-800 lg:mt-0 mt-6">
            Türetici Bakkal; Nilda Kılıç Çıkmaz şahıs şirketi olarak Nisan
            2022’de kurulmuştur. Türetici Bakkal, tüm ürünleri üreticiden aracı
            olmaksızın temin etmektedir. Türetici Bakkal, küçük çaplı üretim
            yapan üreticiler ile dayanışma temelli bir tedarik süreci işletir.
            Türetici Bakkal, üretici ile tüketicilerin iletişim içinde olmasını
            sağlayacak mekanizmaları geliştirilerek ürünlerin üretim süreçlerine
            dair tüketicilerin bilgi sahibi olmasını sağlar. Bu şekilde
            soframızda tükettiğimiz ürüne olan yabancılığımızın ortadan
            kalkacağına ve bizlerin de türeticiliğe ilk adımı atmış olacağını
            inanıyoruz. Üretim ve tüketim ilişkilerinde toplumsal faydayı esas
            alan, doğa ile dost ve ekolojik bir yapıyı destekliyoruz. Ürün
            seçiminde ekolojik koşulları sağlayan üretim süreçlerinde kadın
            emeğininin değersizleştirilmediği, her türlü emek sömürüsünden uzak
            olarak üretilmiş ürünleri tercih ediyoruz. Bu açıdan emeğin ve
            doğanın savunulması, korunmasını ve doğanın ekolojik yapısına uygun
            yerel üretim ile sağlıklı ve nitelikli ürünlere herkesin
            erişebilmesini savunuyoruz. Türetici Bakkal olarak asıl amacın kar
            olmadığını, dayanışma temelli bir sistem inşa etmeyi hedefliyor ve
            alternatif bir tüketim ağının kurulabilceğine inanıyoruz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
