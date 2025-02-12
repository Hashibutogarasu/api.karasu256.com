//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:karasu_lab_admin_client/src/model/country.dart';
import 'package:karasu_lab_admin_client/src/model/gallery.dart';
import 'package:karasu_lab_admin_client/src/model/versions_entity.dart';
import 'package:built_collection/built_collection.dart';
import 'package:karasu_lab_admin_client/src/model/artifact_sets.dart';
import 'package:karasu_lab_admin_client/src/model/weapon.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'gi_character.g.dart';

/// GICharacter
///
/// Properties:
/// * [id] 
/// * [name] 
/// * [description] 
/// * [iconUrl] 
/// * [element] 
/// * [rarity] 
/// * [headerImgUrl] 
/// * [weaponType] 
/// * [property] 
/// * [uninplemented] 
/// * [createdAt] 
/// * [updatedAt] 
/// * [implementedDate] 
/// * [region] 
/// * [weapon] 
/// * [version] 
/// * [artifactSet] 
/// * [galleries] 
@BuiltValue()
abstract class GICharacter implements Built<GICharacter, GICharacterBuilder> {
  @BuiltValueField(wireName: r'id')
  String get id;

  @BuiltValueField(wireName: r'name')
  String get name;

  @BuiltValueField(wireName: r'description')
  String? get description;

  @BuiltValueField(wireName: r'icon_url')
  String get iconUrl;

  @BuiltValueField(wireName: r'element')
  String? get element;

  @BuiltValueField(wireName: r'rarity')
  num? get rarity;

  @BuiltValueField(wireName: r'header_img_url')
  String? get headerImgUrl;

  @BuiltValueField(wireName: r'weapon_type')
  String? get weaponType;

  @BuiltValueField(wireName: r'property')
  String? get property;

  @BuiltValueField(wireName: r'uninplemented')
  bool get uninplemented;

  @BuiltValueField(wireName: r'createdAt')
  DateTime get createdAt;

  @BuiltValueField(wireName: r'updatedAt')
  DateTime get updatedAt;

  @BuiltValueField(wireName: r'implemented_date')
  String? get implementedDate;

  @BuiltValueField(wireName: r'region')
  Country? get region;

  @BuiltValueField(wireName: r'weapon')
  Weapon? get weapon;

  @BuiltValueField(wireName: r'version')
  VersionsEntity? get version;

  @BuiltValueField(wireName: r'artifact_set')
  BuiltList<ArtifactSets>? get artifactSet;

  @BuiltValueField(wireName: r'galleries')
  BuiltList<Gallery>? get galleries;

  GICharacter._();

  factory GICharacter([void updates(GICharacterBuilder b)]) = _$GICharacter;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(GICharacterBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<GICharacter> get serializer => _$GICharacterSerializer();
}

class _$GICharacterSerializer implements PrimitiveSerializer<GICharacter> {
  @override
  final Iterable<Type> types = const [GICharacter, _$GICharacter];

  @override
  final String wireName = r'GICharacter';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    GICharacter object, {
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
    if (object.description != null) {
      yield r'description';
      yield serializers.serialize(
        object.description,
        specifiedType: const FullType.nullable(String),
      );
    }
    yield r'icon_url';
    yield serializers.serialize(
      object.iconUrl,
      specifiedType: const FullType(String),
    );
    if (object.element != null) {
      yield r'element';
      yield serializers.serialize(
        object.element,
        specifiedType: const FullType.nullable(String),
      );
    }
    if (object.rarity != null) {
      yield r'rarity';
      yield serializers.serialize(
        object.rarity,
        specifiedType: const FullType.nullable(num),
      );
    }
    yield r'header_img_url';
    yield object.headerImgUrl == null ? null : serializers.serialize(
      object.headerImgUrl,
      specifiedType: const FullType.nullable(String),
    );
    if (object.weaponType != null) {
      yield r'weapon_type';
      yield serializers.serialize(
        object.weaponType,
        specifiedType: const FullType.nullable(String),
      );
    }
    if (object.property != null) {
      yield r'property';
      yield serializers.serialize(
        object.property,
        specifiedType: const FullType.nullable(String),
      );
    }
    yield r'uninplemented';
    yield serializers.serialize(
      object.uninplemented,
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
    if (object.implementedDate != null) {
      yield r'implemented_date';
      yield serializers.serialize(
        object.implementedDate,
        specifiedType: const FullType.nullable(String),
      );
    }
    if (object.region != null) {
      yield r'region';
      yield serializers.serialize(
        object.region,
        specifiedType: const FullType.nullable(Country),
      );
    }
    if (object.weapon != null) {
      yield r'weapon';
      yield serializers.serialize(
        object.weapon,
        specifiedType: const FullType.nullable(Weapon),
      );
    }
    if (object.version != null) {
      yield r'version';
      yield serializers.serialize(
        object.version,
        specifiedType: const FullType.nullable(VersionsEntity),
      );
    }
    if (object.artifactSet != null) {
      yield r'artifact_set';
      yield serializers.serialize(
        object.artifactSet,
        specifiedType: const FullType.nullable(BuiltList, [FullType(ArtifactSets)]),
      );
    }
    if (object.galleries != null) {
      yield r'galleries';
      yield serializers.serialize(
        object.galleries,
        specifiedType: const FullType.nullable(BuiltList, [FullType(Gallery)]),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    GICharacter object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required GICharacterBuilder result,
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
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.description = valueDes;
          break;
        case r'icon_url':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.iconUrl = valueDes;
          break;
        case r'element':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.element = valueDes;
          break;
        case r'rarity':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(num),
          ) as num?;
          if (valueDes == null) continue;
          result.rarity = valueDes;
          break;
        case r'header_img_url':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.headerImgUrl = valueDes;
          break;
        case r'weapon_type':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.weaponType = valueDes;
          break;
        case r'property':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.property = valueDes;
          break;
        case r'uninplemented':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(bool),
          ) as bool;
          result.uninplemented = valueDes;
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
        case r'implemented_date':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.implementedDate = valueDes;
          break;
        case r'region':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(Country),
          ) as Country?;
          if (valueDes == null) continue;
          result.region.replace(valueDes);
          break;
        case r'weapon':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(Weapon),
          ) as Weapon?;
          if (valueDes == null) continue;
          result.weapon.replace(valueDes);
          break;
        case r'version':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(VersionsEntity),
          ) as VersionsEntity?;
          if (valueDes == null) continue;
          result.version.replace(valueDes);
          break;
        case r'artifact_set':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(BuiltList, [FullType(ArtifactSets)]),
          ) as BuiltList<ArtifactSets>?;
          if (valueDes == null) continue;
          result.artifactSet.replace(valueDes);
          break;
        case r'galleries':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(BuiltList, [FullType(Gallery)]),
          ) as BuiltList<Gallery>?;
          if (valueDes == null) continue;
          result.galleries.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  GICharacter deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = GICharacterBuilder();
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

