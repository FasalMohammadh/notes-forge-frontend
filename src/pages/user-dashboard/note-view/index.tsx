import {
  BlockNoteView,
  useBlockNote,
  lightDefaultTheme,
  Theme,
} from "@blocknote/react";
import { BlockNoteEditor } from "@blocknote/core";
import "@blocknote/react/style.css";
import { Toolbar } from "@mui/material";

import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import MicIcon from "@mui/icons-material/Mic";
import ActionButton from "./components/action-button";
import RecognitionModal from "./components/recognition-modal";
import { useBoolean } from "ahooks";

const theme: Theme = {
  ...lightDefaultTheme,
  colors: {
    editor: {
      background: "rgb(245 245 245)",
      text: "black",
    },
  },
};

function NoteViewPage() {
  const editor: BlockNoteEditor = useBlockNote({});

  const [
    isRecognizingModalOpen,
    { setTrue: setRecognizingModalOpen, setFalse: setRecognizingModalClose },
  ] = useBoolean(false);

  return (
    <>
      <Toolbar className="justify-end">
        <ActionButton startIcon={<RecordVoiceOverIcon />}>
          Read Aloud
        </ActionButton>
        <ActionButton startIcon={<MicIcon />} onClick={setRecognizingModalOpen}>
          Transcribe
        </ActionButton>
      </Toolbar>
      <div className="bg-neutral-100 py-4 h-full">
        <BlockNoteView editor={editor} theme={theme} />
      </div>
      <RecognitionModal
        dialogProps={{
          open: isRecognizingModalOpen,
          onClose: setRecognizingModalClose,
        }}
      />
    </>
  );
}

export default NoteViewPage;
