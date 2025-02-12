// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'hi3_weapons_entity.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$HI3WeaponsEntity extends HI3WeaponsEntity {
  @override
  final String id;
  @override
  final String? name;
  @override
  final String? skill;
  @override
  final String? type;
  @override
  final String? iconUrl;
  @override
  final String? thumbnailUrl;
  @override
  final num? rarity;
  @override
  final num? maxLevel;
  @override
  final String? description;
  @override
  final num? baseAtk;
  @override
  final num? crit;
  @override
  final HI3Characters? characters;

  factory _$HI3WeaponsEntity(
          [void Function(HI3WeaponsEntityBuilder)? updates]) =>
      (new HI3WeaponsEntityBuilder()..update(updates))._build();

  _$HI3WeaponsEntity._(
      {required this.id,
      this.name,
      this.skill,
      this.type,
      this.iconUrl,
      this.thumbnailUrl,
      this.rarity,
      this.maxLevel,
      this.description,
      this.baseAtk,
      this.crit,
      this.characters})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(id, r'HI3WeaponsEntity', 'id');
  }

  @override
  HI3WeaponsEntity rebuild(void Function(HI3WeaponsEntityBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  HI3WeaponsEntityBuilder toBuilder() =>
      new HI3WeaponsEntityBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is HI3WeaponsEntity &&
        id == other.id &&
        name == other.name &&
        skill == other.skill &&
        type == other.type &&
        iconUrl == other.iconUrl &&
        thumbnailUrl == other.thumbnailUrl &&
        rarity == other.rarity &&
        maxLevel == other.maxLevel &&
        description == other.description &&
        baseAtk == other.baseAtk &&
        crit == other.crit &&
        characters == other.characters;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, skill.hashCode);
    _$hash = $jc(_$hash, type.hashCode);
    _$hash = $jc(_$hash, iconUrl.hashCode);
    _$hash = $jc(_$hash, thumbnailUrl.hashCode);
    _$hash = $jc(_$hash, rarity.hashCode);
    _$hash = $jc(_$hash, maxLevel.hashCode);
    _$hash = $jc(_$hash, description.hashCode);
    _$hash = $jc(_$hash, baseAtk.hashCode);
    _$hash = $jc(_$hash, crit.hashCode);
    _$hash = $jc(_$hash, characters.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'HI3WeaponsEntity')
          ..add('id', id)
          ..add('name', name)
          ..add('skill', skill)
          ..add('type', type)
          ..add('iconUrl', iconUrl)
          ..add('thumbnailUrl', thumbnailUrl)
          ..add('rarity', rarity)
          ..add('maxLevel', maxLevel)
          ..add('description', description)
          ..add('baseAtk', baseAtk)
          ..add('crit', crit)
          ..add('characters', characters))
        .toString();
  }
}

class HI3WeaponsEntityBuilder
    implements Builder<HI3WeaponsEntity, HI3WeaponsEntityBuilder> {
  _$HI3WeaponsEntity? _$v;

  String? _id;
  String? get id => _$this._id;
  set id(String? id) => _$this._id = id;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  String? _skill;
  String? get skill => _$this._skill;
  set skill(String? skill) => _$this._skill = skill;

  String? _type;
  String? get type => _$this._type;
  set type(String? type) => _$this._type = type;

  String? _iconUrl;
  String? get iconUrl => _$this._iconUrl;
  set iconUrl(String? iconUrl) => _$this._iconUrl = iconUrl;

  String? _thumbnailUrl;
  String? get thumbnailUrl => _$this._thumbnailUrl;
  set thumbnailUrl(String? thumbnailUrl) => _$this._thumbnailUrl = thumbnailUrl;

  num? _rarity;
  num? get rarity => _$this._rarity;
  set rarity(num? rarity) => _$this._rarity = rarity;

  num? _maxLevel;
  num? get maxLevel => _$this._maxLevel;
  set maxLevel(num? maxLevel) => _$this._maxLevel = maxLevel;

  String? _description;
  String? get description => _$this._description;
  set description(String? description) => _$this._description = description;

  num? _baseAtk;
  num? get baseAtk => _$this._baseAtk;
  set baseAtk(num? baseAtk) => _$this._baseAtk = baseAtk;

  num? _crit;
  num? get crit => _$this._crit;
  set crit(num? crit) => _$this._crit = crit;

  HI3CharactersBuilder? _characters;
  HI3CharactersBuilder get characters =>
      _$this._characters ??= new HI3CharactersBuilder();
  set characters(HI3CharactersBuilder? characters) =>
      _$this._characters = characters;

  HI3WeaponsEntityBuilder() {
    HI3WeaponsEntity._defaults(this);
  }

  HI3WeaponsEntityBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _name = $v.name;
      _skill = $v.skill;
      _type = $v.type;
      _iconUrl = $v.iconUrl;
      _thumbnailUrl = $v.thumbnailUrl;
      _rarity = $v.rarity;
      _maxLevel = $v.maxLevel;
      _description = $v.description;
      _baseAtk = $v.baseAtk;
      _crit = $v.crit;
      _characters = $v.characters?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(HI3WeaponsEntity other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$HI3WeaponsEntity;
  }

  @override
  void update(void Function(HI3WeaponsEntityBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  HI3WeaponsEntity build() => _build();

  _$HI3WeaponsEntity _build() {
    _$HI3WeaponsEntity _$result;
    try {
      _$result = _$v ??
          new _$HI3WeaponsEntity._(
              id: BuiltValueNullFieldError.checkNotNull(
                  id, r'HI3WeaponsEntity', 'id'),
              name: name,
              skill: skill,
              type: type,
              iconUrl: iconUrl,
              thumbnailUrl: thumbnailUrl,
              rarity: rarity,
              maxLevel: maxLevel,
              description: description,
              baseAtk: baseAtk,
              crit: crit,
              characters: _characters?.build());
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'characters';
        _characters?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'HI3WeaponsEntity', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
