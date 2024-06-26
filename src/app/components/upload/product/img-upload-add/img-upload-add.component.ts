import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-img-upload-add',
  templateUrl: './img-upload-add.component.html',
  styleUrl: './img-upload-add.component.scss'
})
export class ImgUploadAddComponent {

  @ViewChild("fileDropRef", { static: false }) fileDropEl!: ElementRef;
  files: any[] = [];

  // limit Files
  limiteFiles:number = 0;

  @Output() addFilesEvent = new EventEmitter<any>();
  @Output() deleteFilesEvent = new EventEmitter<any>();
  @Output() messageFilesEvent = new EventEmitter<string>();
  @Output() progressFilesEvent = new EventEmitter<boolean>();
  @Output() visualizaLocalFilesEvent = new EventEmitter<any>();
  
  onProgressVisible:boolean = false;
  /**
   * on file drop handler
   */
  onFileDropped($event:any) {
    //this.prepareFilesList($event);
    if((this.files.length + $event.target.files.length)<=3){
      
      this.onProgressVisible = true;

      this.progressFilesEvent.emit(true);
      
      this.prepareFilesList($event);
    
    }
    else{
      this.messageFilesEvent.emit("O limite maximo e de 3 arquivos selecionados!");
    }
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files:any) {
    if((this.files.length + files.target.files.length)<=3){
      
      this.onProgressVisible = true;
      this.progressFilesEvent.emit(true);
      this.prepareFilesList(files.target.files);
      
    }
    else{
      this.messageFilesEvent.emit("O limite maximo e de 3 arquivos selecionados!");
    }
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    if (this.files[index].progress < 100) {
      //console.log("Upload in progress.");
      this.messageFilesEvent.emit("Upload in progress!");
      return;
    }
    this.files.splice(index, 1);

    this.deleteFilesEvent.emit(index);

    this.limiteFiles = this.files.length;

  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        
        this.limiteFiles = this.files.length;

        this.progressFilesEvent.emit(false);

        this.onProgressVisible = false;

        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    
    for (const item of files) {
      //console.log(item);
    this.addFilesEvent.emit(item);
      
      item.progress = 0;
      this.files.push(item);
    }
    this.fileDropEl.nativeElement.value = "";
    this.uploadFilesSimulator(0);
    
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes:any, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  // Visualizar
  visualizaFileLocal(file:any){
    if(this.onProgressVisible){
      this.messageFilesEvent.emit("Upload in progress!");
      return  
    }

    this.visualizaLocalFilesEvent.emit(file);
  }

}
