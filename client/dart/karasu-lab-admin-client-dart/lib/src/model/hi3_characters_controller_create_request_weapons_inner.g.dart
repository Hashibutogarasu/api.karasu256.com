// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'hi3_characters_controller_create_request_weapons_inner.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$Hi3CharactersControllerCreateRequestWeaponsInner
    extends Hi3CharactersControllerCreateRequestWeaponsInner {
  @override
  final String? name;
  @override
  final String? skill;
  @override
  final String? description;
  @override
  final String? type;
  @override
  final num? maxLevel;
  @override
  final String? iconUrl;
  @override
  final String? thumbnailUrl;
  @override
  final num? rarity;
  @override
  final num? baseAtk;
  @override
  final num? crit;

  factory _$Hi3CharactersControllerCreateRequestWeaponsInner(
          [void Function(
                  Hi3CharactersControllerCreateRequestWeaponsInnerBuilder)?
              updates]) =>
      (new Hi3CharactersControllerCreateRequestWeaponsInnerBuilder()
            ..update(updates))
          ._build();

  _$Hi3CharactersControllerCreateRequestWeaponsInner._(
      {this.name,
      this.skill,
      this.description,
      this.type,
      this.maxLevel,
      this.iconUrl,
      this.thumbnailUrl,
      this.rarity,
      this.baseAtk,
      this.crit})
      : super._();

  @override
  Hi3CharactersControllerCreateRequestWeaponsInner rebuild(
          void Function(Hi3CharactersControllerCreateRequestWeaponsInnerBuilder)
              updates) =>
      (toBuilder()..update(updates)).build();

  @override
  Hi3CharactersControllerCreateRequestWeaponsInnerBuilder toBuilder() =>
      new Hi3CharactersControllerCreateRequestWeaponsInnerBuilder()
        ..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is Hi3CharactersControllerCreateRequestWeaponsInner &&
        name == other.name &&
        skill == other.skill &&
        description == other.description &&
        type == other.type &&
        maxLevel == other.maxLevel &&
        iconUrl == other.iconUrl &&
        thumbnailUrl == other.thumbnailUrl &&
        rarity == other.rarity &&
        baseAtk == other.baseAtk &&
        crit == other.crit;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, skill.hashCode);
    _$hash = $jc(_$hash, description.hashCode);
    _$hash = $jc(_$hash, type.hashCode);
    _$hash = $jc(_$hash, maxLevel.hashCode);
    _$hash = $jc(_$hash, iconUrl.hashCode);
    _$hash = $jc(_$hash, thumbnailUrl.hashCode);
    _$hash = $jc(_$hash, rarity.hashCode);
    _$hash = $jc(_$hash, baseAtk.hashCode);
    _$hash = $jc(_$hash, crit.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(
            r'Hi3CharactersControllerCreateRequestWeaponsInner')
          ..add('name', name)
          ..add('skill', skill)
          ..add('description', description)
          ..add('type', type)
          ..add('maxLevel', maxLevel)
          ..add('iconUrl', iconUrl)
          ..add('thumbnailUrl', thumbnailUrl)
          ..add('rarity', rarity)
          ..add('baseAtk', baseAtk)
          ..add('crit', crit))
        .toString();
  }
}

class Hi3CharactersControllerCreateRequestWeaponsInnerBuilder
    implements
        Builder<Hi3CharactersControllerCreateRequestWeaponsInner,
            Hi3CharactersControllerCreateRequestWeaponsInnerBuilder> {
  _$Hi3CharactersControllerCreateRequestWeaponsInner? _$v;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  String? _skill;
  String? get skill => _$this._skill;
  set skill(String? skill) => _$this._skill = skill;

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

  String? _thumbnailUrl;
  String? get thumbnailUrl => _$this._thumbnailUrl;
  set thumbnailUrl(String? thumbnailUrl) => _$this._thumbnailUrl = thumbnailUrl;

  num? _rarity;
  num? get rarity => _$this._rarity;
  set rarity(num? rarity) => _$this._rarity = rarity;

  num? _baseAtk;
  num? get baseAtk => _$this._baseAtk;
  set baseAtk(num? baseAtk) => _$this._baseAtk = baseAtk;

  num? _crit;
  num? get crit => _$this._crit;
  set crit(num? crit) => _$this._crit = crit;

  Hi3CharactersControllerCreateRequestWeaponsInnerBuilder() {
    Hi3CharactersControllerCreateRequestWeaponsInner._defaults(this);
  }

  Hi3CharactersControllerCreateRequestWeaponsInnerBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _name = $v.name;
      _skill = $v.skill;
      _description = $v.description;
      _type = $v.type;
      _maxLevel = $v.maxLevel;
      _iconUrl = $v.iconUrl;
      _thumbnailUrl = $v.thumbnailUrl;
      _rarity = $v.rarity;
      _baseAtk = $v.baseAtk;
      _crit = $v.crit;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(Hi3CharactersControllerCreateRequestWeaponsInner other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$Hi3CharactersControllerCreateRequestWeaponsInner;
  }

  @override
  void update(
      void Function(Hi3CharactersControllerCreateRequestWeaponsInnerBuilder)?
          updates) {
    if (updates != null) updates(this);
  }

  @override
  Hi3CharactersControllerCreateRequestWeaponsInner build() => _build();

  _$Hi3CharactersControllerCreateRequestWeaponsInner _build() {
    final _$result = _$v ??
        new _$Hi3CharactersControllerCreateRequestWeaponsInner._(
            name: name,
            skill: skill,
            description: description,
            type: type,
            maxLevel: maxLevel,
            iconUrl: iconUrl,
            thumbnailUrl: thumbnailUrl,
            rarity: rarity,
            baseAtk: baseAtk,
            crit: crit);
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
