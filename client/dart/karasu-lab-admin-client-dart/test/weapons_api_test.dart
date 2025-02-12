import 'package:test/test.dart';
import 'package:karasu_lab_admin_client/karasu_lab_admin_client.dart';


/// tests for WeaponsApi
void main() {
  final instance = KarasuLabAdminClient().getWeaponsApi();

  group(WeaponsApi, () {
    //Future<Weapon> weaponsControllerCreate(WeaponsControllerCreateRequest weaponsControllerCreateRequest) async
    test('test weaponsControllerCreate', () async {
      // TODO
    });

    //Future weaponsControllerDelete(String id) async
    test('test weaponsControllerDelete', () async {
      // TODO
    });

    //Future weaponsControllerUpdate(WeaponsControllerUpdateRequest weaponsControllerUpdateRequest) async
    test('test weaponsControllerUpdate', () async {
      // TODO
    });

  });
}
