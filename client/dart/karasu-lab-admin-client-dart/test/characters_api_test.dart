import 'package:test/test.dart';
import 'package:karasu_lab_admin_client/karasu_lab_admin_client.dart';


/// tests for CharactersApi
void main() {
  final instance = KarasuLabAdminClient().getCharactersApi();

  group(CharactersApi, () {
    //Future<GICharacter> charactersControllerImport(CharactersControllerImportRequest charactersControllerImportRequest) async
    test('test charactersControllerImport', () async {
      // TODO
    });

    //Future<GICharacter> charactersControllerImportFromHoyoLab(CharactersControllerImportFromHoyoLabQueryParameter query) async
    test('test charactersControllerImportFromHoyoLab', () async {
      // TODO
    });

    // Create character
    //
    //Future<GICharacter> createCharacter(CreateCharacterRequest createCharacterRequest) async
    test('test createCharacter', () async {
      // TODO
    });

    // Delete character
    //
    //Future deleteCharacter(String id) async
    test('test deleteCharacter', () async {
      // TODO
    });

    // Update character
    //
    //Future updateCharacter(UpdateCharacterRequest updateCharacterRequest) async
    test('test updateCharacter', () async {
      // TODO
    });

  });
}
