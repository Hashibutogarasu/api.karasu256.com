import 'package:test/test.dart';
import 'package:karasu_lab_admin_client/karasu_lab_admin_client.dart';


/// tests for Hi3CharactersApi
void main() {
  final instance = KarasuLabAdminClient().getHi3CharactersApi();

  group(Hi3CharactersApi, () {
    //Future<HI3Characters> hi3CharactersControllerCreate(Hi3CharactersControllerCreateRequest hi3CharactersControllerCreateRequest) async
    test('test hi3CharactersControllerCreate', () async {
      // TODO
    });

    //Future hi3CharactersControllerDelete(String id) async
    test('test hi3CharactersControllerDelete', () async {
      // TODO
    });

    //Future hi3CharactersControllerUpdate(Hi3CharactersControllerUpdateRequest hi3CharactersControllerUpdateRequest) async
    test('test hi3CharactersControllerUpdate', () async {
      // TODO
    });

  });
}
