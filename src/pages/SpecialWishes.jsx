import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import vidioWishes from "../assets/videos/Wishes.mp4";

const SpecialWishes = ({ isIOS }) => {
  const [showHeart, setShowHeart] = useState(false);

  const wishes = `
Selamat ulang tahun🎂
Sayangkuu cintakuuu😗🩷

Semoga dengan bertambahnya usia,kamu selalu menjadi pribadi yang lebih baik lagi dari hari ini . semoga kamu selalu diberi kesehatan baik fisik ataupun mental , dan juga dilancarkan rezekinya , dipermudah segala urusanya juga dikuatkan setiap rasa lelahmu , 

Terimakasih sudah hadir di hidup aku , terimakasih atas cinta,perhatian dan kesabaran yang kamu kasih , terimakasih sudah menjadi sosok yang tetap sama dari awal sampai sekarang yang selalu berusaha bertahan , aku mau minta maaf belum bisa jadi apa yang kamu mau, belum bisa bahagiain kamu hehe, maafin yaa udah sering ovt sering cemburu ga jelas, sering nuduh ini dan itu , eat lest itu aku sayang sama kamu hehe..
Aku gamau kita pisah . aku berharap kamu cukup sama aku ,walaupun aku banyak kurangnya , maaf banget aku se-egois ini ke kamu , aku gamau kamu sama yang lain hehe, semua kebahagiaan kita sedang aku usahakan , jadi minta do’anya ya sayang hehe .
Ingat  sejauh apapun jarak dan sesibuk apapun keadaan, aku selalu ada disini bareng kamu , mendukung setiap langkah dan usahamu . 

Tetap jaga diri dan jaga sikap yaa disana, dan juga jaga kepercayaan yang kita punya .

Aku minta tolong , seretak apapun hubungan kitaa , tolong jangan sampai pergi yaa , perbaiki semua kesalahan kita masing2 yaa , aku minta tolong banget soal itu ya hehe .
aku gamau lagi ada sosok orang ke-3 lagi, cukup yang lalu itu terakhir yaa sayang ,
aku sayang sama kamuu🥹🩷 

kadang malah aku mikir gini , apa aku yang ga pantas ya buat kamu hehe  ,  sekarang posisi ku lagi dibawah2nya  dan kamu sudah sukses disana🥹 , diluaran sana banyak yang lebih dari aku , 
maaf aku belum bisa ngasih kamu hadiah apapun hehe 

Sekali lagi selamat ulang tahun yaa duniakuu
🫶🏼 
Panjang umur dan sehat selalu yaa cintakuu🩷

お誕生日 おめでとう🩷

  `;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
          Pesan Spesial Untukmu
        </h1>

        <div className="mb-8">
          <video
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            className="w-full max-w-md mx-auto rounded-lg shadow-xl"
          >
            <source src={vidioWishes} type="video/mp4" />
          </video>
        </div>

        <motion.div
          whileHover={{ scale: isIOS ? 1 : 1.01 }}
          className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8"
        >
          <div className="prose max-w-none">
            {wishes.split("\n").map((paragraph, i) => (
              <p key={i} className="text-pink-800 mb-4 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: isIOS ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowHeart(!showHeart)}
            className="relative overflow-hidden bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg"
          >
            <span className="button-text">
              {showHeart ? "Sembunyikan Cintaku" : "Lihat Cintaku"}
            </span>
          </motion.button>
        </div>

        <AnimatePresence>
          {showHeart && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            >
              <motion.div
                className="relative text-pink-500"
                animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-[12rem] select-none text-center">❤️</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold drop-shadow-lg">
                  Kesayangan aku 💖
                </div>
                <div className="text-white text-lg text-center mt-4">
                  My Heart Belongs to you, Honey🥹
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SpecialWishes;
