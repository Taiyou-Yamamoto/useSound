'use client';
import Link from 'next/link';
import useSound from 'use-sound';

export default function Home() {
  const [play, { pause, duration }] = useSound('/song/4296112_0_1.mp3', {
    volume: 0.1,
    interrupt: true,
    soundEnabled: true,
    sprite: { intro: [0, 1000], outro: [10000, 1000] },
  });
  // const playHandle = () => {
  //   play({ forceSoundEnabled: true });
  // };

  const stopHandle = () => {
    console.log(duration);
  };
  const pauseHandle = () => {
    pause();
  };
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <button
        onClick={() => play({ id: 'intro' })}
        className='bg-orange-500 m-3'
      >
        play
      </button>
      <button
        onClick={() => play({ id: 'outro' })}
        className='bg-orange-500 m-3'
      >
        play
      </button>
      <button onClick={stopHandle} className='bg-orange-500 m-3'>
        stop
      </button>
      <button onClick={pauseHandle} className='bg-orange-500 m-3'>
        pause
      </button>
      <h1>{duration}</h1>
      <Link
        href='/A'
        className='w-[10rem] mx-auto font-DotJP hover:animate-shake font-extrabold text-white shadow-2xl active:shadow-none py-2 px-4 pl-6 rounded-md border-solid border-4 border-yellow-400 bg-gray-700 mt-4 ring-offset-2 ring-4'
      >
        ハイパーレベル
      </Link>
    </div>
  );
}
