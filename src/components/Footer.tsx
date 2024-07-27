import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">Türetici Bakkal</div>
          </Link>
          <p>
            100. Yıl Mah. Reşit Galip Cad. Dolunay Sok. No: 5/A Çankaya/Ankara
            Türkiye
          </p>
          <span className="font-semibold">tureticibakkalstore@gmail.com</span>
          <span className="font-semibold">0501 036 62 44</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">Türetici Bakkal</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Hakkımızda</Link>
              <Link href="">Türetici Bloğu</Link>
              <Link href="">Üretici Ağımız</Link>
              <Link href="">Ürün Sertifikalarımız</Link>
              <Link href="">İletişim</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">Ürünler</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Yeni Gelenler</Link>
              <Link href="">Kategoriler</Link>
              <Link href="">Tüm Ürünler</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">Yardım</h1>
            <div className="flex flex-col gap-6">
              <Link href="">İptal ve İade Şartları</Link>
              <Link href="">Kişisel Verilerin Korunması</Link>
              <Link href="">Mesafeli Satış Sözleşmesi</Link>
              <Link href="">Gizlilik ve Güvenlik Politikası</Link>
              <Link href="">Banka Hesap Bilgilerimiz</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">Abone Ol</h1>
          <p>
            Trendler, promosyonlar ve ilgili en son haberleri ilk alan siz olun!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="E-posta Adresiniz"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-lama text-white">JOIN</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="" width={40} height={20} />
            <Image src="/skrill.png" alt="" width={40} height={20} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2024 Turetici Bakkal Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Dil</span>
            <span className="font-medium">Türkiye | Turkish</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Para Birimi</span>
            <span className="font-medium">₺ TL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
