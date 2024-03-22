/**
 * @fileoverview
 * Strings used by {@class Html5Qrcode} & {@class Html5QrcodeScanner}
 *
 * @author mebjas <minhazav@gmail.com>
 *
 * The word "QR Code" is registered trademark of DENSO WAVE INCORPORATED
 * http://www.denso-wave.com/qrcode/faqpatent-e.html
 */

/**
 * Strings used in {@class Html5Qrcode}.
 *
 * TODO(mebjas): Support internalization.
 */
export class Html5QrcodeStrings {
  public static codeParseError(exception: any): string {
    return `QR코드 파싱 오류, 오류 = ${exception}`; // `QR code parse error, error = ${exception}`
  }

  public static errorGettingUserMedia(error: any): string {
    return `미이어 정보 가져오기 오류, 오류 = ${error}`; // `Error getting userMedia, error = ${error}`
  }

  public static onlyDeviceSupportedError(): string {
    return (
      "장치에서 navigator.mediaDevices 를 지원하지 않습니다," + //"The device doesn't support navigator.mediaDevices , only " +
      "이 경우 지원되는 CameraIdOrConfig는 deviceId 매개변수입니다. " + // "supported cameraIdOrConfig in this case is deviceId parameter " +
      "(string)." // "(string)."
    );
  }

  public static cameraStreamingNotSupported(): string {
    return "브라우저에서 카메라 스트리밍을 지원하지 않습니다."; //"Camera streaming not supported by the browser."
  }

  public static unableToQuerySupportedDevices(): string {
    return "지원되는 장치를 쿼리할 수 없습니다. 알 수 없는 오류입니다."; // "Unable to query supported devices, unknown error."
  }

  public static insecureContextCameraQueryError(): string {
    return (
      "카메라 액세스는 localhost 또는 https와 같은 보안 컨텍스트에서만 지원됩니다. " + // "Camera access is only supported in secure context like https "
      "" // "or localhost."
    );
  }

  public static scannerPaused(): string {
    return "스캐너가 일시중지되었습니다."; // "Scanner paused"
  }
}

/**
 * Strings used in {@class Html5QrcodeScanner}.
 *
 * TODO(mebjas): Support internalization.
 */
export class Html5QrcodeScannerStrings {
  public static scanningStatus(): string {
    return "스캔중"; // "Scanning"
  }

  public static idleStatus(): string {
    return "대기중"; // "Idle"
  }

  public static errorStatus(): string {
    return "오류"; // "Error"
  }

  public static permissionStatus(): string {
    return "권한"; // "Permission"
  }

  public static noCameraFoundErrorStatus(): string {
    return "카메라 없음"; // "No Cameras"
  }

  public static lastMatch(decodedText: string): string {
    return `마지막 확인정보 : ${decodedText}`; // `Last Match: ${decodedText}`
  }

  public static codeScannerTitle(): string {
    return "코드 스캐너"; // "Code Scanner"
  }

  public static cameraPermissionTitle(): string {
    return "카메라 권한 요청"; // "Request Camera Permissions"
  }

  public static cameraPermissionRequesting(): string {
    return "카메라 권한을 요청하는 중..."; // "Requesting camera permissions..."
  }

  public static noCameraFound(): string {
    return "카메라를 찾을 수 없습니다."; // "No camera found"
  }

  public static scanButtonStopScanningText(): string {
    return "스캔 중지"; // "Stop Scanning"
  }

  public static scanButtonStartScanningText(): string {
    return "스캔 시작"; // "Start Scanning"
  }

  public static torchOnButton(): string {
    return "라이트 켜기"; // "Switch On Torch"
  }

  public static torchOffButton(): string {
    return "라이크 끄기"; // "Switch Off Torch"
  }

  public static torchOnFailedMessage(): string {
    return "라이트를 켜지 못했습니다"; // "Failed to turn on torch"
  }

  public static torchOffFailedMessage(): string {
    return "라이트를 끄지 못했습니다"; // "Failed to turn off torch"
  }

  public static scanButtonScanningStarting(): string {
    return "카메라 실행 중..."; // "Launching Camera..."
  }

  /**
   * Text to show when camera scan is selected.
   *
   * This will be used to switch to file based scanning.
   */
  public static textIfCameraScanSelected(): string {
    return "이미지 파일 스캔"; // "Scan an Image File"
  }

  /**
   * Text to show when file based scan is selected.
   *
   * This will be used to switch to camera based scanning.
   */
  public static textIfFileScanSelected(): string {
    return "카메라를 사용하여 직접 스캔"; // "Scan using camera directly"
  }

  public static selectCamera(): string {
    return "카메라 선택"; // "Select Camera"
  }

  public static fileSelectionChooseImage(): string {
    return "이미지 선택"; // "Choose Image"
  }

  public static fileSelectionChooseAnother(): string {
    return "다른것 선택"; // "Choose Another"
  }

  public static fileSelectionNoImageSelected(): string {
    return "이미지가 선택되지 않았습니다"; // "No image choosen"
  }

  /** Prefix to be given to anonymous cameras. */
  public static anonymousCameraPrefix(): string {
    return "알 수 없는 카메라"; // "Anonymous Camera"
  }

  public static dragAndDropMessage(): string {
    return "또는 스캔할 이미지를 드롭하세요"; // "Or drop an image to scan"
  }

  public static dragAndDropMessageOnlyImages(): string {
    return "또는 스캔할 이미지를 드롭하세요(다른 파일은 지원되지 않음)"; // "Or drop an image to scan (other files not supported)"
  }

  /** Value for zoom. */
  public static zoom(): string {
    return "줌"; // "zoom"
  }

  public static loadingImage(): string {
    return "이미지 로딩중..."; // "Loading image..."
  }

  public static cameraScanAltText(): string {
    return "카메라 기반 스캔"; // "Camera based scan"
  }

  public static fileScanAltText(): string {
    return "연료 기반 스캔"; // "Fule based scan"
  }
}

/** Strings used in {@class LibraryInfoDiv} */
export class LibraryInfoStrings {
  public static poweredBy(): string {
    return "제공 "; // "Powered by "
  }

  public static reportIssues(): string {
    return "이슈 보고"; // "Report issues"
  }
}
