declare module "use-sound" {
  type SoundOptions = {
    sound?: string;
    volume?: number;
    playbackRate?: number;
    id?: string;
    interrupt?: boolean;
    onend?: () => void;
    onload?: () => void;
  };

  type UseSoundHook = (src: string, options?: SoundOptions) => [() => void, { stop: () => void }];

  const useSound: UseSoundHook;

  export default useSound;
}
