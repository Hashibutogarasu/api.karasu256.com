// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'hi3_characters_controller_update_request_skills_inner.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$Hi3CharactersControllerUpdateRequestSkillsInner
    extends Hi3CharactersControllerUpdateRequestSkillsInner {
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

  factory _$Hi3CharactersControllerUpdateRequestSkillsInner(
          [void Function(
                  Hi3CharactersControllerUpdateRequestSkillsInnerBuilder)?
              updates]) =>
      (new Hi3CharactersControllerUpdateRequestSkillsInnerBuilder()
            ..update(updates))
          ._build();

  _$Hi3CharactersControllerUpdateRequestSkillsInner._(
      {required this.id,
      this.name,
      this.description,
      this.type,
      this.maxLevel,
      this.iconUrl})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(
        id, r'Hi3CharactersControllerUpdateRequestSkillsInner', 'id');
  }

  @override
  Hi3CharactersControllerUpdateRequestSkillsInner rebuild(
          void Function(Hi3CharactersControllerUpdateRequestSkillsInnerBuilder)
              updates) =>
      (toBuilder()..update(updates)).build();

  @override
  Hi3CharactersControllerUpdateRequestSkillsInnerBuilder toBuilder() =>
      new Hi3CharactersControllerUpdateRequestSkillsInnerBuilder()
        ..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is Hi3CharactersControllerUpdateRequestSkillsInner &&
        id == other.id &&
        name == other.name &&
        description == other.description &&
        type == other.type &&
        maxLevel == other.maxLevel &&
        iconUrl == other.iconUrl;
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
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(
            r'Hi3CharactersControllerUpdateRequestSkillsInner')
          ..add('id', id)
          ..add('name', name)
          ..add('description', description)
          ..add('type', type)
          ..add('maxLevel', maxLevel)
          ..add('iconUrl', iconUrl))
        .toString();
  }
}

class Hi3CharactersControllerUpdateRequestSkillsInnerBuilder
    implements
        Builder<Hi3CharactersControllerUpdateRequestSkillsInner,
            Hi3CharactersControllerUpdateRequestSkillsInnerBuilder> {
  _$Hi3CharactersControllerUpdateRequestSkillsInner? _$v;

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

  Hi3CharactersControllerUpdateRequestSkillsInnerBuilder() {
    Hi3CharactersControllerUpdateRequestSkillsInner._defaults(this);
  }

  Hi3CharactersControllerUpdateRequestSkillsInnerBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _name = $v.name;
      _description = $v.description;
      _type = $v.type;
      _maxLevel = $v.maxLevel;
      _iconUrl = $v.iconUrl;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(Hi3CharactersControllerUpdateRequestSkillsInner other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$Hi3CharactersControllerUpdateRequestSkillsInner;
  }

  @override
  void update(
      void Function(Hi3CharactersControllerUpdateRequestSkillsInnerBuilder)?
          updates) {
    if (updates != null) updates(this);
  }

  @override
  Hi3CharactersControllerUpdateRequestSkillsInner build() => _build();

  _$Hi3CharactersControllerUpdateRequestSkillsInner _build() {
    final _$result = _$v ??
        new _$Hi3CharactersControllerUpdateRequestSkillsInner._(
            id: BuiltValueNullFieldError.checkNotNull(
                id, r'Hi3CharactersControllerUpdateRequestSkillsInner', 'id'),
            name: name,
            description: description,
            type: type,
            maxLevel: maxLevel,
            iconUrl: iconUrl);
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
