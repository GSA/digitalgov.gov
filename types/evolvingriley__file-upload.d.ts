declare module '@evolvingriley/file-upload' {
    function mkdir_and_download_files(): Promise<boolean>;
    function upload(): Promise<string>;
}
