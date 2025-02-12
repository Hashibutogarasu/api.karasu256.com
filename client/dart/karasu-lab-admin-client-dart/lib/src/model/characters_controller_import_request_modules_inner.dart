//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_collection/built_collection.dart';
import 'package:karasu_lab_admin_client/src/model/characters_controller_import_request_modules_inner_components_inner.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'characters_controller_import_request_modules_inner.g.dart';

/// CharactersControllerImportRequestModulesInner
///
/// Properties:
/// * [name] 
/// * [isPosed] 
/// * [components] 
/// * [id] 
/// * [isCustomizeName] 
/// * [isAbstract] 
/// * [isShowSwitch] 
/// * [switch_] 
/// * [desc] 
/// * [repeated] 
/// * [isSubmodule] 
/// * [originModuleId] 
/// * [withoutBorder] 
/// * [canDelete] 
/// * [isHidden] 
/// * [richTextEditing] 
@BuiltValue()
abstract class CharactersControllerImportRequestModulesInner implements Built<CharactersControllerImportRequestModulesInner, CharactersControllerImportRequestModulesInnerBuilder> {
  @BuiltValueField(wireName: r'name')
  String get name;

  @BuiltValueField(wireName: r'is_posed')
  bool? get isPosed;

  @BuiltValueField(wireName: r'components')
  BuiltList<CharactersControllerImportRequestModulesInnerComponentsInner>? get components;

  @BuiltValueField(wireName: r'id')
  String get id;

  @BuiltValueField(wireName: r'is_customize_name')
  bool? get isCustomizeName;

  @BuiltValueField(wireName: r'is_abstract')
  bool? get isAbstract;

  @BuiltValueField(wireName: r'is_show_switch')
  bool? get isShowSwitch;

  @BuiltValueField(wireName: r'switch')
  bool? get switch_;

  @BuiltValueField(wireName: r'desc')
  String get desc;

  @BuiltValueField(wireName: r'repeated')
  bool? get repeated;

  @BuiltValueField(wireName: r'is_submodule')
  bool? get isSubmodule;

  @BuiltValueField(wireName: r'origin_module_id')
  String get originModuleId;

  @BuiltValueField(wireName: r'without_border')
  bool? get withoutBorder;

  @BuiltValueField(wireName: r'can_delete')
  bool? get canDelete;

  @BuiltValueField(wireName: r'is_hidden')
  bool? get isHidden;

  @BuiltValueField(wireName: r'rich_text_editing')
  bool? get richTextEditing;

  CharactersControllerImportRequestModulesInner._();

  factory CharactersControllerImportRequestModulesInner([void updates(CharactersControllerImportRequestModulesInnerBuilder b)]) = _$CharactersControllerImportRequestModulesInner;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(CharactersControllerImportRequestModulesInnerBuilder b) => b
      ..isPosed = false
      ..components = ListBuilder()
      ..isCustomizeName = false
      ..isAbstract = false
      ..isShowSwitch = false
      ..switch_ = false
      ..repeated = false
      ..isSubmodule = false
      ..withoutBorder = false
      ..canDelete = false
      ..isHidden = false
      ..richTextEditing = false;

  @BuiltValueSerializer(custom: true)
  static Serializer<CharactersControllerImportRequestModulesInner> get serializer => _$CharactersControllerImportRequestModulesInnerSerializer();
}

class _$CharactersControllerImportRequestModulesInnerSerializer implements PrimitiveSerializer<CharactersControllerImportRequestModulesInner> {
  @override
  final Iterable<Type> types = const [CharactersControllerImportRequestModulesInner, _$CharactersControllerImportRequestModulesInner];

  @override
  final String wireName = r'CharactersControllerImportRequestModulesInner';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    CharactersControllerImportRequestModulesInner object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'name';
    yield serializers.serialize(
      object.name,
      specifiedType: const FullType(String),
    );
    if (object.isPosed != null) {
      yield r'is_posed';
      yield serializers.serialize(
        object.isPosed,
        specifiedType: const FullType(bool),
      );
    }
    if (object.components != null) {
      yield r'components';
      yield serializers.serialize(
        object.components,
        specifiedType: const FullType(BuiltList, [FullType(CharactersControllerImportRequestModulesInnerComponentsInner)]),
      );
    }
    yield r'id';
    yield serializers.serialize(
      object.id,
      specifiedType: const FullType(String),
    );
    if (object.isCustomizeName != null) {
      yield r'is_customize_name';
      yield serializers.serialize(
        object.isCustomizeName,
        specifiedType: const FullType(bool),
      );
    }
    if (object.isAbstract != null) {
      yield r'is_abstract';
      yield serializers.serialize(
        object.isAbstract,
        specifiedType: const FullType(bool),
      );
    }
    if (object.isShowSwitch != null) {
      yield r'is_show_switch';
      yield serializers.serialize(
        object.isShowSwitch,
        specifiedType: const FullType(bool),
      );
    }
    if (object.switch_ != null) {
      yield r'switch';
      yield serializers.serialize(
        object.switch_,
        specifiedType: const FullType(bool),
      );
    }
    yield r'desc';
    yield serializers.serialize(
      object.desc,
      specifiedType: const FullType(String),
    );
    if (object.repeated != null) {
      yield r'repeated';
      yield serializers.serialize(
        object.repeated,
        specifiedType: const FullType(bool),
      );
    }
    if (object.isSubmodule != null) {
      yield r'is_submodule';
      yield serializers.serialize(
        object.isSubmodule,
        specifiedType: const FullType(bool),
      );
    }
    yield r'origin_module_id';
    yield serializers.serialize(
      object.originModuleId,
      specifiedType: const FullType(String),
    );
    if (object.withoutBorder != null) {
      yield r'without_border';
      yield serializers.serialize(
        object.withoutBorder,
        specifiedType: const FullType(bool),
      );
    }
    if (object.canDelete != null) {
      yield r'can_delete';
      yield serializers.serialize(
        object.canDelete,
        specifiedType: const FullType(bool),
      );
    }
    if (object.isHidden != null) {
      yield r'is_hidden';
      yield serializers.serialize(
        object.isHidden,
        specifiedType: const FullType(bool),
      );
    }
    if (object.richTextEditing != null) {
      yield r'rich_text_editing';
      yield serializers.serialize(
        object.richTextEditing,
        specifiedType: const FullType(bool),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    CharactersControllerImportRequestModulesInner object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required CharactersControllerImportRequestModulesInnerBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'name':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.name = valueDes;
          break;
        case r'is_posed':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(bool),
          ) as bool;
          result.isPosed = valueDes;
          break;
        case r'components':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(BuiltList, [FullType(CharactersControllerImportRequestModulesInnerComponentsInner)]),
          ) as BuiltList<CharactersControllerImportRequestModulesInnerComponentsInner>;
          result.components.replace(valueDes);
          break;
        case r'id':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.id = valueDes;
          break;
        case r'is_customize_name':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(bool),
          ) as bool;
          result.isCustomizeName = valueDes;
          break;
        case r'is_abstract':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(bool),
          ) as bool;
          result.isAbstract = valueDes;
          break;
        case r'is_show_switch':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(bool),
          ) as bool;
          result.isShowSwitch = valueDes;
          break;
        case r'switch':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(bool),
          ) as bool;
          result.switch_ = valueDes;
          break;
        case r'desc':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.desc = valueDes;
          break;
        case r'repeated':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(bool),
          ) as bool;
          result.repeated = valueDes;
          break;
        case r'is_submodule':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(bool),
          ) as bool;
          result.isSubmodule = valueDes;
          break;
        case r'origin_module_id':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.originModuleId = valueDes;
          break;
        case r'without_border':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(bool),
          ) as bool;
          result.withoutBorder = valueDes;
          break;
        case r'can_delete':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(bool),
          ) as bool;
          result.canDelete = valueDes;
          break;
        case r'is_hidden':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(bool),
          ) as bool;
          result.isHidden = valueDes;
          break;
        case r'rich_text_editing':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(bool),
          ) as bool;
          result.richTextEditing = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  CharactersControllerImportRequestModulesInner deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = CharactersControllerImportRequestModulesInnerBuilder();
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

