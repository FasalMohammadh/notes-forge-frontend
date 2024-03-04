import {
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  IconButton,
} from "@mui/material";

import MicIcon from "@mui/icons-material/Mic";
import CloseIcon from "@mui/icons-material/Close";

import "regenerator-runtime/runtime";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function RecognitionModal(props: Readonly<Props>) {
  const {
    transcript,
    listening,
    resetTranscript,
    isMicrophoneAvailable,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  function handleClickStart() {
    SpeechRecognition.startListening({ continuous: true, language: "en-US" });
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  if (!isMicrophoneAvailable) {
    return <span>Microphone is not available.</span>;
  }

  return (
    <Dialog {...props.dialogProps} disablePortal maxWidth="xs" fullWidth>
      <div className="flex items-center justify-between py-4 px-6">
        <DialogTitle className="p-0">Transcription</DialogTitle>
        <IconButton onClick={props.dialogProps.onClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <DialogContent className="flex flex-col items-center justify-center">
        <div className="isolate flex items-center justify-center rounded-full p-3 m-4 relative">
          <span className="absolute inset-0 bg-neutral-200/50 z-10 rounded-full scale-150 hover:scale-[2] transition-transform" />
          <span className="absolute inset-0 bg-neutral-400/50 z-20 rounded-full" />
          <div className="z-30 flex gap-2">
            <MicIcon />
          </div>
        </div>
        <p className="text-center text-neutral-500">
          {listening ? "Listening..." : "Not listening..."}
        </p>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" size="small" onClick={handleClickStart}>
          Start
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={SpeechRecognition.stopListening}
        >
          Stop
        </Button>
        {/* <Button onClick={resetTranscript}>Reset</Button> */}
        <p>{transcript}</p>
      </DialogActions>
    </Dialog>
  );
}

type Props = {
  dialogProps: Omit<DialogProps, "onClose"> & { onClose: () => void };
};

export default RecognitionModal;
