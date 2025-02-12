// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'hi3_characters_controller_update_request.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$Hi3CharactersControllerUpdateRequest
    extends Hi3CharactersControllerUpdateRequest {
  @override
  final String name;
  @override
  final String? description;
  @override
  final String? subName;
  @override
  final BuiltList<Hi3CharactersControllerUpdateRequestSkillsInner?>? skills;
  @override
  final BuiltList<Hi3CharactersControllerUpdateRequestWeaponsInner?> weapons;
  @override
  final BuiltList<Hi3CharactersControllerUpdateRequestStigmatasInner>?
      stigmatas;
  @override
  final String id;

  factory _$Hi3CharactersControllerUpdateRequest(
          [void Function(Hi3CharactersControllerUpdateRequestBuilder)?
              updates]) =>
      (new Hi3CharactersControllerUpdateRequestBuilder()..update(updates))
          ._build();

  _$Hi3CharactersControllerUpdateRequest._(
      {required this.name,
      this.description,
      this.subName,
      this.skills,
      required this.weapons,
      this.stigmatas,
      required this.id})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(
        name, r'Hi3CharactersControllerUpdateRequest', 'name');
    BuiltValueNullFieldError.checkNotNull(
        weapons, r'Hi3CharactersControllerUpdateRequest', 'weapons');
    BuiltValueNullFieldError.checkNotNull(
        id, r'Hi3CharactersControllerUpdateRequest', 'id');
  }

  @override
  Hi3CharactersControllerUpdateRequest rebuild(
          void Function(Hi3CharactersControllerUpdateRequestBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  Hi3CharactersControllerUpdateRequestBuilder toBuilder() =>
      new Hi3CharactersControllerUpdateRequestBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is Hi3CharactersControllerUpdateRequest &&
        name == other.name &&
        description == other.description &&
        subName == other.subName &&
        skills == other.skills &&
        weapons == other.weapons &&
        stigmatas == other.stigmatas &&
        id == other.id;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, description.hashCode);
    _$hash = $jc(_$hash, subName.hashCode);
    _$hash = $jc(_$hash, skills.hashCode);
    _$hash = $jc(_$hash, weapons.hashCode);
    _$hash = $jc(_$hash, stigmatas.hashCode);
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'Hi3CharactersControllerUpdateRequest')
          ..add('name', name)
          ..add('description', description)
          ..add('subName', subName)
          ..add('skills', skills)
          ..add('weapons', weapons)
          ..add('stigmatas', stigmatas)
          ..add('id', id))
        .toString();
  }
}

class Hi3CharactersControllerUpdateRequestBuilder
    implements
        Builder<Hi3CharactersControllerUpdateRequest,
            Hi3CharactersControllerUpdateRequestBuilder> {
  _$Hi3CharactersControllerUpdateRequest? _$v;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  String? _description;
  String? get description => _$this._description;
  set description(String? description) => _$this._description = description;

  String? _subName;
  String? get subName => _$this._subName;
  set subName(String? subName) => _$this._subName = subName;

  ListBuilder<Hi3CharactersControllerUpdateRequestSkillsInner?>? _skills;
  ListBuilder<Hi3CharactersControllerUpdateRequestSkillsInner?> get skills =>
      _$this._skills ??=
          new ListBuilder<Hi3CharactersControllerUpdateRequestSkillsInner?>();
  set skills(
          ListBuilder<Hi3CharactersControllerUpdateRequestSkillsInner?>?
              skills) =>
      _$this._skills = skills;

  ListBuilder<Hi3CharactersControllerUpdateRequestWeaponsInner?>? _weapons;
  ListBuilder<Hi3CharactersControllerUpdateRequestWeaponsInner?> get weapons =>
      _$this._weapons ??=
          new ListBuilder<Hi3CharactersControllerUpdateRequestWeaponsInner?>();
  set weapons(
          ListBuilder<Hi3CharactersControllerUpdateRequestWeaponsInner?>?
              weapons) =>
      _$this._weapons = weapons;

  ListBuilder<Hi3CharactersControllerUpdateRequestStigmatasInner>? _stigmatas;
  ListBuilder<Hi3CharactersControllerUpdateRequestStigmatasInner>
      get stigmatas => _$this._stigmatas ??=
          new ListBuilder<Hi3CharactersControllerUpdateRequestStigmatasInner>();
  set stigmatas(
          ListBuilder<Hi3CharactersControllerUpdateRequestStigmatasInner>?
              stigmatas) =>
      _$this._stigmatas = stigmatas;

  String? _id;
  String? get id => _$this._id;
  set id(String? id) => _$this._id = id;

  Hi3CharactersControllerUpdateRequestBuilder() {
    Hi3CharactersControllerUpdateRequest._defaults(this);
  }

  Hi3CharactersControllerUpdateRequestBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _name = $v.name;
      _description = $v.description;
      _subName = $v.subName;
      _skills = $v.skills?.toBuilder();
      _weapons = $v.weapons.toBuilder();
      _stigmatas = $v.stigmatas?.toBuilder();
      _id = $v.id;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(Hi3CharactersControllerUpdateRequest other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$Hi3CharactersControllerUpdateRequest;
  }

  @override
  void update(
      void Function(Hi3CharactersControllerUpdateRequestBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  Hi3CharactersControllerUpdateRequest build() => _build();

  _$Hi3CharactersControllerUpdateRequest _build() {
    _$Hi3CharactersControllerUpdateRequest _$result;
    try {
      _$result = _$v ??
          new _$Hi3CharactersControllerUpdateRequest._(
              name: BuiltValueNullFieldError.checkNotNull(
                  name, r'Hi3CharactersControllerUpdateRequest', 'name'),
              description: description,
              subName: subName,
              skills: _skills?.build(),
              weapons: weapons.build(),
              stigmatas: _stigmatas?.build(),
              id: BuiltValueNullFieldError.checkNotNull(
                  id, r'Hi3CharactersControllerUpdateRequest', 'id'));
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'skills';
        _skills?.build();
        _$failedField = 'weapons';
        weapons.build();
        _$failedField = 'stigmatas';
        _stigmatas?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'Hi3CharactersControllerUpdateRequest',
            _$failedField,
            e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
