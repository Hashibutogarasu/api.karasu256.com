// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'hi3_skills_entity.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$HI3SkillsEntity extends HI3SkillsEntity {
  @override
  final String id;
  @override
  final String? name;
  @override
  final String? description;
  @override
  final String? type;
  @override
  final num? maxLevel;
  @override
  final String? iconUrl;
  @override
  final HI3Characters? characters;

  factory _$HI3SkillsEntity([void Function(HI3SkillsEntityBuilder)? updates]) =>
      (new HI3SkillsEntityBuilder()..update(updates))._build();

  _$HI3SkillsEntity._(
      {required this.id,
      this.name,
      this.description,
      this.type,
      this.maxLevel,
      this.iconUrl,
      this.characters})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(id, r'HI3SkillsEntity', 'id');
  }

  @override
  HI3SkillsEntity rebuild(void Function(HI3SkillsEntityBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  HI3SkillsEntityBuilder toBuilder() =>
      new HI3SkillsEntityBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is HI3SkillsEntity &&
        id == other.id &&
        name == other.name &&
        description == other.description &&
        type == other.type &&
        maxLevel == other.maxLevel &&
        iconUrl == other.iconUrl &&
        characters == other.characters;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, description.hashCode);
    _$hash = $jc(_$hash, type.hashCode);
    _$hash = $jc(_$hash, maxLevel.hashCode);
    _$hash = $jc(_$hash, iconUrl.hashCode);
    _$hash = $jc(_$hash, characters.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'HI3SkillsEntity')
          ..add('id', id)
          ..add('name', name)
          ..add('description', description)
          ..add('type', type)
          ..add('maxLevel', maxLevel)
          ..add('iconUrl', iconUrl)
          ..add('characters', characters))
        .toString();
  }
}

class HI3SkillsEntityBuilder
    implements Builder<HI3SkillsEntity, HI3SkillsEntityBuilder> {
  _$HI3SkillsEntity? _$v;

  String? _id;
  String? get id => _$this._id;
  set id(String? id) => _$this._id = id;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  String? _description;
  String? get description => _$this._description;
  set description(String? description) => _$this._description = description;

  String? _type;
  String? get type => _$this._type;
  set type(String? type) => _$this._type = type;

  num? _maxLevel;
  num? get maxLevel => _$this._maxLevel;
  set maxLevel(num? maxLevel) => _$this._maxLevel = maxLevel;

  String? _iconUrl;
  String? get iconUrl => _$this._iconUrl;
  set iconUrl(String? iconUrl) => _$this._iconUrl = iconUrl;

  HI3CharactersBuilder? _characters;
  HI3CharactersBuilder get characters =>
      _$this._characters ??= new HI3CharactersBuilder();
  set characters(HI3CharactersBuilder? characters) =>
      _$this._characters = characters;

  HI3SkillsEntityBuilder() {
    HI3SkillsEntity._defaults(this);
  }

  HI3SkillsEntityBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _name = $v.name;
      _description = $v.description;
      _type = $v.type;
      _maxLevel = $v.maxLevel;
      _iconUrl = $v.iconUrl;
      _characters = $v.characters?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(HI3SkillsEntity other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$HI3SkillsEntity;
  }

  @override
  void update(void Function(HI3SkillsEntityBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  HI3SkillsEntity build() => _build();

  _$HI3SkillsEntity _build() {
    _$HI3SkillsEntity _$result;
    try {
      _$result = _$v ??
          new _$HI3SkillsEntity._(
              id: BuiltValueNullFieldError.checkNotNull(
                  id, r'HI3SkillsEntity', 'id'),
              name: name,
              description: description,
              type: type,
              maxLevel: maxLevel,
              iconUrl: iconUrl,
              characters: _characters?.build());
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'characters';
        _characters?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'HI3SkillsEntity', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
