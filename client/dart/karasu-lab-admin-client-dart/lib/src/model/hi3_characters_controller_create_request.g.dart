// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'hi3_characters_controller_create_request.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$Hi3CharactersControllerCreateRequest
    extends Hi3CharactersControllerCreateRequest {
  @override
  final String name;
  @override
  final String? description;
  @override
  final String? subName;
  @override
  final BuiltList<Hi3CharactersControllerCreateRequestSkillsInner?>? skills;
  @override
  final BuiltList<Hi3CharactersControllerCreateRequestWeaponsInner>? weapons;
  @override
  final BuiltList<Hi3CharactersControllerUpdateRequestStigmatasInner>?
      stigmatas;

  factory _$Hi3CharactersControllerCreateRequest(
          [void Function(Hi3CharactersControllerCreateRequestBuilder)?
              updates]) =>
      (new Hi3CharactersControllerCreateRequestBuilder()..update(updates))
          ._build();

  _$Hi3CharactersControllerCreateRequest._(
      {required this.name,
      this.description,
      this.subName,
      this.skills,
      this.weapons,
      this.stigmatas})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(
        name, r'Hi3CharactersControllerCreateRequest', 'name');
  }

  @override
  Hi3CharactersControllerCreateRequest rebuild(
          void Function(Hi3CharactersControllerCreateRequestBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  Hi3CharactersControllerCreateRequestBuilder toBuilder() =>
      new Hi3CharactersControllerCreateRequestBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is Hi3CharactersControllerCreateRequest &&
        name == other.name &&
        description == other.description &&
        subName == other.subName &&
        skills == other.skills &&
        weapons == other.weapons &&
        stigmatas == other.stigmatas;
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
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'Hi3CharactersControllerCreateRequest')
          ..add('name', name)
          ..add('description', description)
          ..add('subName', subName)
          ..add('skills', skills)
          ..add('weapons', weapons)
          ..add('stigmatas', stigmatas))
        .toString();
  }
}

class Hi3CharactersControllerCreateRequestBuilder
    implements
        Builder<Hi3CharactersControllerCreateRequest,
            Hi3CharactersControllerCreateRequestBuilder> {
  _$Hi3CharactersControllerCreateRequest? _$v;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  String? _description;
  String? get description => _$this._description;
  set description(String? description) => _$this._description = description;

  String? _subName;
  String? get subName => _$this._subName;
  set subName(String? subName) => _$this._subName = subName;

  ListBuilder<Hi3CharactersControllerCreateRequestSkillsInner?>? _skills;
  ListBuilder<Hi3CharactersControllerCreateRequestSkillsInner?> get skills =>
      _$this._skills ??=
          new ListBuilder<Hi3CharactersControllerCreateRequestSkillsInner?>();
  set skills(
          ListBuilder<Hi3CharactersControllerCreateRequestSkillsInner?>?
              skills) =>
      _$this._skills = skills;

  ListBuilder<Hi3CharactersControllerCreateRequestWeaponsInner>? _weapons;
  ListBuilder<Hi3CharactersControllerCreateRequestWeaponsInner> get weapons =>
      _$this._weapons ??=
          new ListBuilder<Hi3CharactersControllerCreateRequestWeaponsInner>();
  set weapons(
          ListBuilder<Hi3CharactersControllerCreateRequestWeaponsInner>?
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

  Hi3CharactersControllerCreateRequestBuilder() {
    Hi3CharactersControllerCreateRequest._defaults(this);
  }

  Hi3CharactersControllerCreateRequestBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _name = $v.name;
      _description = $v.description;
      _subName = $v.subName;
      _skills = $v.skills?.toBuilder();
      _weapons = $v.weapons?.toBuilder();
      _stigmatas = $v.stigmatas?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(Hi3CharactersControllerCreateRequest other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$Hi3CharactersControllerCreateRequest;
  }

  @override
  void update(
      void Function(Hi3CharactersControllerCreateRequestBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  Hi3CharactersControllerCreateRequest build() => _build();

  _$Hi3CharactersControllerCreateRequest _build() {
    _$Hi3CharactersControllerCreateRequest _$result;
    try {
      _$result = _$v ??
          new _$Hi3CharactersControllerCreateRequest._(
              name: BuiltValueNullFieldError.checkNotNull(
                  name, r'Hi3CharactersControllerCreateRequest', 'name'),
              description: description,
              subName: subName,
              skills: _skills?.build(),
              weapons: _weapons?.build(),
              stigmatas: _stigmatas?.build());
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'skills';
        _skills?.build();
        _$failedField = 'weapons';
        _weapons?.build();
        _$failedField = 'stigmatas';
        _stigmatas?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'Hi3CharactersControllerCreateRequest',
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
