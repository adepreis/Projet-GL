import { Modal } from "@mantine/core";
import { Dispatch, SetStateAction } from "react";
import { UILigne, UINote } from "../../pages/home/[params]";
import EditLineForm from "../EditLineForm";

type EditModalProps = {
    note: NonNullable<UINote>,
    editedLine: UILigne | null,
    localLines: UILigne[],
    setLocalLine: Dispatch<SetStateAction<UILigne[]>>,
    opened: boolean,
    setOpened: Dispatch<SetStateAction<boolean>>,
    setViewedLine: Dispatch<SetStateAction<UILigne | null>>
}

export default function EditModal(props: EditModalProps) {
    const {note, editedLine, opened, setOpened, localLines, setLocalLine, setViewedLine} = props;

    return <Modal centered opened={opened}
        onClose={() => setOpened(false)}
        title={editedLine ? "Modifier une ligne de frais" : "Ajouter une ligne de frais"}
        size="lg" padding="xl"
        closeOnClickOutside={false}  // to avoid miss-clicks
        closeButtonLabel="Fermer la boite modale"
    >
        <EditLineForm 
            line={editedLine} 
            setOpened={setOpened}
            linesToSave={localLines} 
            setLineToSave={setLocalLine}
            note={note}
            setViewedLine={setViewedLine}
        />
    </Modal>
}