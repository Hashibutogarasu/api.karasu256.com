import 'package:test/test.dart';
import 'package:karasu_lab_admin_client/karasu_lab_admin_client.dart';


/// tests for GalleriesApi
void main() {
  final instance = KarasuLabAdminClient().getGalleriesApi();

  group(GalleriesApi, () {
    //Future<Gallery> galleriesControllerCreate(GalleriesControllerCreateRequest galleriesControllerCreateRequest) async
    test('test galleriesControllerCreate', () async {
      // TODO
    });

    //Future galleriesControllerDelete(String id) async
    test('test galleriesControllerDelete', () async {
      // TODO
    });

    //Future galleriesControllerUpdate(ArtifactSetsControllerUpdateRequest artifactSetsControllerUpdateRequest) async
    test('test galleriesControllerUpdate', () async {
      // TODO
    });

    //Future galleriesControllerUploadFile({ String comment, int outletId, MultipartFile file }) async
    test('test galleriesControllerUploadFile', () async {
      // TODO
    });

  });
}
