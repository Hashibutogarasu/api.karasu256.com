//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:karasu_lab_admin_client/src/model/country.dart';
import 'package:karasu_lab_admin_client/src/model/artifacts.dart';
import 'package:built_collection/built_collection.dart';
import 'package:karasu_lab_admin_client/src/model/artifact_sets.dart';
import 'package:karasu_lab_admin_client/src/model/gi_character.dart';
import 'package:karasu_lab_admin_client/src/model/weapon.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'versions_entity.g.dart';

/// VersionsEntity
///
/// Properties:
/// * [id] 
/// * [name] 
/// * [versionString] 
/// * [released] 
/// * [createdAt] 
/// * [updatedAt] 
/// * [characters] 
/// * [weapons] 
/// * [artifactSets] 
/// * [countries] 
/// * [artifacts] 
@BuiltValue()
abstract class VersionsEntity implements Built<VersionsEntity, VersionsEntityBuilder> {
  @BuiltValueField(wireName: r'id')
  String get id;

  @BuiltValueField(wireName: r'name')
  String? get name;

  @BuiltValueField(wireName: r'version_string')
  String get versionString;

  @BuiltValueField(wireName: r'released')
  bool get released;

  @BuiltValueField(wireName: r'createdAt')
  DateTime get createdAt;

  @BuiltValueField(wireName: r'updatedAt')
  DateTime get updatedAt;

  @BuiltValueField(wireName: r'characters')
  BuiltList<GICharacter>? get characters;

  @BuiltValueField(wireName: r'weapons')
  BuiltList<Weapon>? get weapons;

  @BuiltValueField(wireName: r'artifact_sets')
  BuiltList<ArtifactSets>? get artifactSets;

  @BuiltValueField(wireName: r'countries')
  BuiltList<Country>? get countries;

  @BuiltValueField(wireName: r'artifacts')
  BuiltList<Artifacts>? get artifacts;

  VersionsEntity._();

  factory VersionsEntity([void updates(VersionsEntityBuilder b)]) = _$VersionsEntity;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(VersionsEntityBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<VersionsEntity> get serializer => _$VersionsEntitySerializer();
}

class _$VersionsEntitySerializer implements PrimitiveSerializer<VersionsEntity> {
  @override
  final Iterable<Type> types = const [VersionsEntity, _$VersionsEntity];

  @override
  final String wireName = r'VersionsEntity';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    VersionsEntity object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'id';
    yield serializers.serialize(
      object.id,
      specifiedType: const FullType(String),
    );
    if (object.name != null) {
      yield r'name';
      yield serializers.serialize(
        object.name,
        specifiedType: const FullType.nullable(String),
      );
    }
    yield r'version_string';
    yield serializers.serialize(
      object.versionString,
      specifiedType: const FullType(String),
    );
    yield r'released';
    yield serializers.serialize(
      object.released,
      specifiedType: const FullType(bool),
    );
    yield r'createdAt';
    yield serializers.serialize(
      object.createdAt,
      specifiedType: const FullType(DateTime),
    );
    yield r'updatedAt';
    yield serializers.serialize(
      object.updatedAt,
      specifiedType: const FullType(DateTime),
    );
    if (object.characters != null) {
      yield r'characters';
      yield serializers.serialize(
        object.characters,
        specifiedType: const FullType.nullable(BuiltList, [FullType(GICharacter)]),
      );
    }
    if (object.weapons != null) {
      yield r'weapons';
      yield serializers.serialize(
        object.weapons,
        specifiedType: const FullType.nullable(BuiltList, [FullType(Weapon)]),
      );
    }
    if (object.artifactSets != null) {
      yield r'artifact_sets';
      yield serializers.serialize(
        object.artifactSets,
        specifiedType: const FullType.nullable(BuiltList, [FullType(ArtifactSets)]),
      );
    }
    if (object.countries != null) {
      yield r'countries';
      yield serializers.serialize(
        object.countries,
        specifiedType: const FullType.nullable(BuiltList, [FullType(Country)]),
      );
    }
    if (object.artifacts != null) {
      yield r'artifacts';
      yield serializers.serialize(
        object.artifacts,
        specifiedType: const FullType.nullable(BuiltList, [FullType(Artifacts)]),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    VersionsEntity object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required VersionsEntityBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'id':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.id = valueDes;
          break;
        case r'name':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.name = valueDes;
          break;
        case r'version_string':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.versionString = valueDes;
          break;
        case r'released':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(bool),
          ) as bool;
          result.released = valueDes;
          break;
        case r'createdAt':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(DateTime),
          ) as DateTime;
          result.createdAt = valueDes;
          break;
        case r'updatedAt':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(DateTime),
          ) as DateTime;
          result.updatedAt = valueDes;
          break;
        case r'characters':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(BuiltList, [FullType(GICharacter)]),
          ) as BuiltList<GICharacter>?;
          if (valueDes == null) continue;
          result.characters.replace(valueDes);
          break;
        case r'weapons':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(BuiltList, [FullType(Weapon)]),
          ) as BuiltList<Weapon>?;
          if (valueDes == null) continue;
          result.weapons.replace(valueDes);
          break;
        case r'artifact_sets':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(BuiltList, [FullType(ArtifactSets)]),
          ) as BuiltList<ArtifactSets>?;
          if (valueDes == null) continue;
          result.artifactSets.replace(valueDes);
          break;
        case r'countries':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(BuiltList, [FullType(Country)]),
          ) as BuiltList<Country>?;
          if (valueDes == null) continue;
          result.countries.replace(valueDes);
          break;
        case r'artifacts':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(BuiltList, [FullType(Artifacts)]),
          ) as BuiltList<Artifacts>?;
          if (valueDes == null) continue;
          result.artifacts.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  VersionsEntity deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = VersionsEntityBuilder();
    final serializedList = (serialized as Iterable<Object?>).toList();
    final unhandled = <Object?>[];
    _deserializeProperties(
      serializers,
      serialized,
      specifiedType: specifiedType,
      serializedList: serializedList,
      unhandled: unhandled,
      result: result,
    );
    return result.build();
  }
}

