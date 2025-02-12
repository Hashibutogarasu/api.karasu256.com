// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'hi3_stigmatas_entity.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$HI3StigmatasEntity extends HI3StigmatasEntity {
  @override
  final String id;
  @override
  final String? name;
  @override
  final String? description;
  @override
  final String? skill;
  @override
  final String? type;
  @override
  final String? twoSetSkill;
  @override
  final String? threeSetSkill;
  @override
  final num? maxLevel;
  @override
  final String? iconUrl;
  @override
  final String? thumbnailUrl;
  @override
  final DateTime createdAt;
  @override
  final DateTime updatedAt;
  @override
  final HI3Characters? characters;

  factory _$HI3StigmatasEntity(
          [void Function(HI3StigmatasEntityBuilder)? updates]) =>
      (new HI3StigmatasEntityBuilder()..update(updates))._build();

  _$HI3StigmatasEntity._(
      {required this.id,
      this.name,
      this.description,
      this.skill,
      this.type,
      this.twoSetSkill,
      this.threeSetSkill,
      this.maxLevel,
      this.iconUrl,
      this.thumbnailUrl,
      required this.createdAt,
      required this.updatedAt,
      this.characters})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(id, r'HI3StigmatasEntity', 'id');
    BuiltValueNullFieldError.checkNotNull(
        createdAt, r'HI3StigmatasEntity', 'createdAt');
    BuiltValueNullFieldError.checkNotNull(
        updatedAt, r'HI3StigmatasEntity', 'updatedAt');
  }

  @override
  HI3StigmatasEntity rebuild(
          void Function(HI3StigmatasEntityBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  HI3StigmatasEntityBuilder toBuilder() =>
      new HI3StigmatasEntityBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is HI3StigmatasEntity &&
        id == other.id &&
        name == other.name &&
        description == other.description &&
        skill == other.skill &&
        type == other.type &&
        twoSetSkill == other.twoSetSkill &&
        threeSetSkill == other.threeSetSkill &&
        maxLevel == other.maxLevel &&
        iconUrl == other.iconUrl &&
        thumbnailUrl == other.thumbnailUrl &&
        createdAt == other.createdAt &&
        updatedAt == other.updatedAt &&
        characters == other.characters;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, description.hashCode);
    _$hash = $jc(_$hash, skill.hashCode);
    _$hash = $jc(_$hash, type.hashCode);
    _$hash = $jc(_$hash, twoSetSkill.hashCode);
    _$hash = $jc(_$hash, threeSetSkill.hashCode);
    _$hash = $jc(_$hash, maxLevel.hashCode);
    _$hash = $jc(_$hash, iconUrl.hashCode);
    _$hash = $jc(_$hash, thumbnailUrl.hashCode);
    _$hash = $jc(_$hash, createdAt.hashCode);
    _$hash = $jc(_$hash, updatedAt.hashCode);
    _$hash = $jc(_$hash, characters.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'HI3StigmatasEntity')
          ..add('id', id)
          ..add('name', name)
          ..add('description', description)
          ..add('skill', skill)
          ..add('type', type)
          ..add('twoSetSkill', twoSetSkill)
          ..add('threeSetSkill', threeSetSkill)
          ..add('maxLevel', maxLevel)
          ..add('iconUrl', iconUrl)
          ..add('thumbnailUrl', thumbnailUrl)
          ..add('createdAt', createdAt)
          ..add('updatedAt', updatedAt)
          ..add('characters', characters))
        .toString();
  }
}

class HI3StigmatasEntityBuilder
    implements Builder<HI3StigmatasEntity, HI3StigmatasEntityBuilder> {
  _$HI3StigmatasEntity? _$v;

  String? _id;
  String? get id => _$this._id;
  set id(String? id) => _$this._id = id;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  String? _description;
  String? get description => _$this._description;
  set description(String? description) => _$this._description = description;

  String? _skill;
  String? get skill => _$this._skill;
  set skill(String? skill) => _$this._skill = skill;

  String? _type;
  String? get type => _$this._type;
  set type(String? type) => _$this._type = type;

  String? _twoSetSkill;
  String? get twoSetSkill => _$this._twoSetSkill;
  set twoSetSkill(String? twoSetSkill) => _$this._twoSetSkill = twoSetSkill;

  String? _threeSetSkill;
  String? get threeSetSkill => _$this._threeSetSkill;
  set threeSetSkill(String? threeSetSkill) =>
      _$this._threeSetSkill = threeSetSkill;

  num? _maxLevel;
  num? get maxLevel => _$this._maxLevel;
  set maxLevel(num? maxLevel) => _$this._maxLevel = maxLevel;

  String? _iconUrl;
  String? get iconUrl => _$this._iconUrl;
  set iconUrl(String? iconUrl) => _$this._iconUrl = iconUrl;

  String? _thumbnailUrl;
  String? get thumbnailUrl => _$this._thumbnailUrl;
  set thumbnailUrl(String? thumbnailUrl) => _$this._thumbnailUrl = thumbnailUrl;

  DateTime? _createdAt;
  DateTime? get createdAt => _$this._createdAt;
  set createdAt(DateTime? createdAt) => _$this._createdAt = createdAt;

  DateTime? _updatedAt;
  DateTime? get updatedAt => _$this._updatedAt;
  set updatedAt(DateTime? updatedAt) => _$this._updatedAt = updatedAt;

  HI3CharactersBuilder? _characters;
  HI3CharactersBuilder get characters =>
      _$this._characters ??= new HI3CharactersBuilder();
  set characters(HI3CharactersBuilder? characters) =>
      _$this._characters = characters;

  HI3StigmatasEntityBuilder() {
    HI3StigmatasEntity._defaults(this);
  }

  HI3StigmatasEntityBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _name = $v.name;
      _description = $v.description;
      _skill = $v.skill;
      _type = $v.type;
      _twoSetSkill = $v.twoSetSkill;
      _threeSetSkill = $v.threeSetSkill;
      _maxLevel = $v.maxLevel;
      _iconUrl = $v.iconUrl;
      _thumbnailUrl = $v.thumbnailUrl;
      _createdAt = $v.createdAt;
      _updatedAt = $v.updatedAt;
      _characters = $v.characters?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(HI3StigmatasEntity other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$HI3StigmatasEntity;
  }

  @override
  void update(void Function(HI3StigmatasEntityBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  HI3StigmatasEntity build() => _build();

  _$HI3StigmatasEntity _build() {
    _$HI3StigmatasEntity _$result;
    try {
      _$result = _$v ??
          new _$HI3StigmatasEntity._(
              id: BuiltValueNullFieldError.checkNotNull(
                  id, r'HI3StigmatasEntity', 'id'),
              name: name,
              description: description,
              skill: skill,
              type: type,
              twoSetSkill: twoSetSkill,
              threeSetSkill: threeSetSkill,
              maxLevel: maxLevel,
              iconUrl: iconUrl,
              thumbnailUrl: thumbnailUrl,
              createdAt: BuiltValueNullFieldError.checkNotNull(
                  createdAt, r'HI3StigmatasEntity', 'createdAt'),
              updatedAt: BuiltValueNullFieldError.checkNotNull(
                  updatedAt, r'HI3StigmatasEntity', 'updatedAt'),
              characters: _characters?.build());
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'characters';
        _characters?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'HI3StigmatasEntity', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
