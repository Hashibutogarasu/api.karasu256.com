// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'hi3_characters.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$HI3Characters extends HI3Characters {
  @override
  final String id;
  @override
  final String name;
  @override
  final String? subName;
  @override
  final String? description;
  @override
  final DateTime createdAt;
  @override
  final DateTime updatedAt;
  @override
  final BuiltList<HI3SkillsEntity>? skills;
  @override
  final BuiltList<HI3StigmatasEntity>? stigmatas;
  @override
  final BuiltList<HI3WeaponsEntity>? weapons;

  factory _$HI3Characters([void Function(HI3CharactersBuilder)? updates]) =>
      (new HI3CharactersBuilder()..update(updates))._build();

  _$HI3Characters._(
      {required this.id,
      required this.name,
      this.subName,
      this.description,
      required this.createdAt,
      required this.updatedAt,
      this.skills,
      this.stigmatas,
      this.weapons})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(id, r'HI3Characters', 'id');
    BuiltValueNullFieldError.checkNotNull(name, r'HI3Characters', 'name');
    BuiltValueNullFieldError.checkNotNull(
        createdAt, r'HI3Characters', 'createdAt');
    BuiltValueNullFieldError.checkNotNull(
        updatedAt, r'HI3Characters', 'updatedAt');
  }

  @override
  HI3Characters rebuild(void Function(HI3CharactersBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  HI3CharactersBuilder toBuilder() => new HI3CharactersBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is HI3Characters &&
        id == other.id &&
        name == other.name &&
        subName == other.subName &&
        description == other.description &&
        createdAt == other.createdAt &&
        updatedAt == other.updatedAt &&
        skills == other.skills &&
        stigmatas == other.stigmatas &&
        weapons == other.weapons;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, subName.hashCode);
    _$hash = $jc(_$hash, description.hashCode);
    _$hash = $jc(_$hash, createdAt.hashCode);
    _$hash = $jc(_$hash, updatedAt.hashCode);
    _$hash = $jc(_$hash, skills.hashCode);
    _$hash = $jc(_$hash, stigmatas.hashCode);
    _$hash = $jc(_$hash, weapons.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'HI3Characters')
          ..add('id', id)
          ..add('name', name)
          ..add('subName', subName)
          ..add('description', description)
          ..add('createdAt', createdAt)
          ..add('updatedAt', updatedAt)
          ..add('skills', skills)
          ..add('stigmatas', stigmatas)
          ..add('weapons', weapons))
        .toString();
  }
}

class HI3CharactersBuilder
    implements Builder<HI3Characters, HI3CharactersBuilder> {
  _$HI3Characters? _$v;

  String? _id;
  String? get id => _$this._id;
  set id(String? id) => _$this._id = id;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  String? _subName;
  String? get subName => _$this._subName;
  set subName(String? subName) => _$this._subName = subName;

  String? _description;
  String? get description => _$this._description;
  set description(String? description) => _$this._description = description;

  DateTime? _createdAt;
  DateTime? get createdAt => _$this._createdAt;
  set createdAt(DateTime? createdAt) => _$this._createdAt = createdAt;

  DateTime? _updatedAt;
  DateTime? get updatedAt => _$this._updatedAt;
  set updatedAt(DateTime? updatedAt) => _$this._updatedAt = updatedAt;

  ListBuilder<HI3SkillsEntity>? _skills;
  ListBuilder<HI3SkillsEntity> get skills =>
      _$this._skills ??= new ListBuilder<HI3SkillsEntity>();
  set skills(ListBuilder<HI3SkillsEntity>? skills) => _$this._skills = skills;

  ListBuilder<HI3StigmatasEntity>? _stigmatas;
  ListBuilder<HI3StigmatasEntity> get stigmatas =>
      _$this._stigmatas ??= new ListBuilder<HI3StigmatasEntity>();
  set stigmatas(ListBuilder<HI3StigmatasEntity>? stigmatas) =>
      _$this._stigmatas = stigmatas;

  ListBuilder<HI3WeaponsEntity>? _weapons;
  ListBuilder<HI3WeaponsEntity> get weapons =>
      _$this._weapons ??= new ListBuilder<HI3WeaponsEntity>();
  set weapons(ListBuilder<HI3WeaponsEntity>? weapons) =>
      _$this._weapons = weapons;

  HI3CharactersBuilder() {
    HI3Characters._defaults(this);
  }

  HI3CharactersBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _name = $v.name;
      _subName = $v.subName;
      _description = $v.description;
      _createdAt = $v.createdAt;
      _updatedAt = $v.updatedAt;
      _skills = $v.skills?.toBuilder();
      _stigmatas = $v.stigmatas?.toBuilder();
      _weapons = $v.weapons?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(HI3Characters other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$HI3Characters;
  }

  @override
  void update(void Function(HI3CharactersBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  HI3Characters build() => _build();

  _$HI3Characters _build() {
    _$HI3Characters _$result;
    try {
      _$result = _$v ??
          new _$HI3Characters._(
              id: BuiltValueNullFieldError.checkNotNull(
                  id, r'HI3Characters', 'id'),
              name: BuiltValueNullFieldError.checkNotNull(
                  name, r'HI3Characters', 'name'),
              subName: subName,
              description: description,
              createdAt: BuiltValueNullFieldError.checkNotNull(
                  createdAt, r'HI3Characters', 'createdAt'),
              updatedAt: BuiltValueNullFieldError.checkNotNull(
                  updatedAt, r'HI3Characters', 'updatedAt'),
              skills: _skills?.build(),
              stigmatas: _stigmatas?.build(),
              weapons: _weapons?.build());
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'skills';
        _skills?.build();
        _$failedField = 'stigmatas';
        _stigmatas?.build();
        _$failedField = 'weapons';
        _weapons?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'HI3Characters', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
