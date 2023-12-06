import { ImageEditor } from './image-editor';
import { ImageEditorBackup } from './image-editor-backup';

const imageEditor = new ImageEditor('/media/image.png', 'png');
const backupManager = new ImageEditorBackup(imageEditor);

backupManager.backup();
imageEditor.convertFormatTo('gif');

backupManager.backup();
imageEditor.convertFormatTo('bmp');

backupManager.backup();
imageEditor.convertFormatTo('jpg');

console.log(imageEditor);
backupManager.undo();
console.log(imageEditor);
