//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:karasu_lab_admin_client/src/model/versions_entity.dart';
import 'package:karasu_lab_admin_client/src/model/artifacts.dart';
import 'package:built_collection/built_collection.dart';
import 'package:karasu_lab_admin_client/src/model/gi_character.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'artifact_sets.g.dart';

/// ArtifactSets
///
/// Properties:
/// * [id] 
/// * [name] 
/// * [description] 
/// * [iconUrl] 
/// * [oneSetEffect] 
/// * [twoSetEffect] 
/// * [fourSetEffect] 
/// * [createdAt] 
/// * [updatedAt] 
/// * [artifacts] 
/// * [characters] 
/// * [version] 
@BuiltValue()
abstract class ArtifactSets implements Built<ArtifactSets, ArtifactSetsBuilder> {
  @BuiltValueField(wireName: r'id')
  String get id;

  @BuiltValueField(wireName: r'name')
  String get name;

  @BuiltValueField(wireName: r'description')
  String get description;

  @BuiltValueField(wireName: r'icon_url')
  String get iconUrl;

  @BuiltValueField(wireName: r'one_set_effect')
  String get oneSetEffect;

  @BuiltValueField(wireName: r'two_set_effect')
  String get twoSetEffect;

  @BuiltValueField(wireName: r'four_set_effect')
  String get fourSetEffect;

  @BuiltValueField(wireName: r'createdAt')
  DateTime get createdAt;

  @BuiltValueField(wireName: r'updatedAt')
  DateTime get updatedAt;

  @BuiltValueField(wireName: r'artifacts')
  BuiltList<Artifacts>? get artifacts;

  @BuiltValueField(wireName: r'characters')
  BuiltList<GICharacter>? get characters;

  @BuiltValueField(wireName: r'version')
  VersionsEntity get version;

  ArtifactSets._();

  factory ArtifactSets([void updates(ArtifactSetsBuilder b)]) = _$ArtifactSets;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(ArtifactSetsBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<ArtifactSets> get serializer => _$ArtifactSetsSerializer();
}

class _$ArtifactSetsSerializer implements PrimitiveSerializer<ArtifactSets> {
  @override
  final Iterable<Type> types = const [ArtifactSets, _$ArtifactSets];

  @override
  final String wireName = r'ArtifactSets';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    ArtifactSets object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'id';
    yield serializers.serialize(
      object.id,
      specifiedType: const FullType(String),
    );
    yield r'name';
    yield serializers.serialize(
      object.name,
      specifiedType: const FullType(String),
    );
    yield r'description';
    yield serializers.serialize(
      object.description,
      specifiedType: const FullType(String),
    );
    yield r'icon_url';
    yield serializers.serialize(
      object.iconUrl,
      specifiedType: const FullType(String),
    );
    yield r'one_set_effect';
    yield serializers.serialize(
      object.oneSetEffect,
      specifiedType: const FullType(String),
    );
    yield r'two_set_effect';
    yield serializers.serialize(
      object.twoSetEffect,
      specifiedType: const FullType(String),
    );
    yield r'four_set_effect';
    yield serializers.serialize(
      object.fourSetEffect,
      specifiedType: const FullType(String),
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
    if (object.artifacts != null) {
      yield r'artifacts';
      yield serializers.serialize(
        object.artifacts,
        specifiedType: const FullType.nullable(BuiltList, [FullType(Artifacts)]),
      );
    }
    if (object.characters != null) {
      yield r'characters';
      yield serializers.serialize(
        object.characters,
        specifiedType: const FullType.nullable(BuiltList, [FullType(GICharacter)]),
      );
    }
    yield r'version';
    yield serializers.serialize(
      object.version,
      specifiedType: const FullType(VersionsEntity),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    ArtifactSets object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required ArtifactSetsBuilder result,
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
            specifiedType: const FullType(String),
          ) as String;
          result.name = valueDes;
          break;
        case r'description':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.description = valueDes;
          break;
        case r'icon_url':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.iconUrl = valueDes;
          break;
        case r'one_set_effect':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.oneSetEffect = valueDes;
          break;
        case r'two_set_effect':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.twoSetEffect = valueDes;
          break;
        case r'four_set_effect':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.fourSetEffect = valueDes;
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
        case r'artifacts':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(BuiltList, [FullType(Artifacts)]),
          ) as BuiltList<Artifacts>?;
          if (valueDes == null) continue;
          result.artifacts.replace(valueDes);
          break;
        case r'characters':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(BuiltList, [FullType(GICharacter)]),
          ) as BuiltList<GICharacter>?;
          if (valueDes == null) continue;
          result.characters.replace(valueDes);
          break;
        case r'version':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(VersionsEntity),
          ) as VersionsEntity;
          result.version.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  ArtifactSets deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = ArtifactSetsBuilder();
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

