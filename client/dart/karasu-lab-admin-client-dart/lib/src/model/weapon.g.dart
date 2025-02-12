// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'weapon.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$Weapon extends Weapon {
  @override
  final String id;
  @override
  final String name;
  @override
  final DateTime createdAt;
  @override
  final DateTime updatedAt;
  @override
  final String? description;
  @override
  final String iconUrl;
  @override
  final num rarity;
  @override
  final String effect;
  @override
  final String type;
  @override
  final BuiltList<GICharacter>? characters;
  @override
  final VersionsEntity? version;

  factory _$Weapon([void Function(WeaponBuilder)? updates]) =>
      (new WeaponBuilder()..update(updates))._build();

  _$Weapon._(
      {required this.id,
      required this.name,
      required this.createdAt,
      required this.updatedAt,
      this.description,
      required this.iconUrl,
      required this.rarity,
      required this.effect,
      required this.type,
      this.characters,
      this.version})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(id, r'Weapon', 'id');
    BuiltValueNullFieldError.checkNotNull(name, r'Weapon', 'name');
    BuiltValueNullFieldError.checkNotNull(createdAt, r'Weapon', 'createdAt');
    BuiltValueNullFieldError.checkNotNull(updatedAt, r'Weapon', 'updatedAt');
    BuiltValueNullFieldError.checkNotNull(iconUrl, r'Weapon', 'iconUrl');
    BuiltValueNullFieldError.checkNotNull(rarity, r'Weapon', 'rarity');
    BuiltValueNullFieldError.checkNotNull(effect, r'Weapon', 'effect');
    BuiltValueNullFieldError.checkNotNull(type, r'Weapon', 'type');
  }

  @override
  Weapon rebuild(void Function(WeaponBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  WeaponBuilder toBuilder() => new WeaponBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is Weapon &&
        id == other.id &&
        name == other.name &&
        createdAt == other.createdAt &&
        updatedAt == other.updatedAt &&
        description == other.description &&
        iconUrl == other.iconUrl &&
        rarity == other.rarity &&
        effect == other.effect &&
        type == other.type &&
        characters == other.characters &&
        version == other.version;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, createdAt.hashCode);
    _$hash = $jc(_$hash, updatedAt.hashCode);
    _$hash = $jc(_$hash, description.hashCode);
    _$hash = $jc(_$hash, iconUrl.hashCode);
    _$hash = $jc(_$hash, rarity.hashCode);
    _$hash = $jc(_$hash, effect.hashCode);
    _$hash = $jc(_$hash, type.hashCode);
    _$hash = $jc(_$hash, characters.hashCode);
    _$hash = $jc(_$hash, version.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'Weapon')
          ..add('id', id)
          ..add('name', name)
          ..add('createdAt', createdAt)
          ..add('updatedAt', updatedAt)
          ..add('description', description)
          ..add('iconUrl', iconUrl)
          ..add('rarity', rarity)
          ..add('effect', effect)
          ..add('type', type)
          ..add('characters', characters)
          ..add('version', version))
        .toString();
  }
}

class WeaponBuilder implements Builder<Weapon, WeaponBuilder> {
  _$Weapon? _$v;

  String? _id;
  String? get id => _$this._id;
  set id(String? id) => _$this._id = id;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  DateTime? _createdAt;
  DateTime? get createdAt => _$this._createdAt;
  set createdAt(DateTime? createdAt) => _$this._createdAt = createdAt;

  DateTime? _updatedAt;
  DateTime? get updatedAt => _$this._updatedAt;
  set updatedAt(DateTime? updatedAt) => _$this._updatedAt = updatedAt;

  String? _description;
  String? get description => _$this._description;
  set description(String? description) => _$this._description = description;

  String? _iconUrl;
  String? get iconUrl => _$this._iconUrl;
  set iconUrl(String? iconUrl) => _$this._iconUrl = iconUrl;

  num? _rarity;
  num? get rarity => _$this._rarity;
  set rarity(num? rarity) => _$this._rarity = rarity;

  String? _effect;
  String? get effect => _$this._effect;
  set effect(String? effect) => _$this._effect = effect;

  String? _type;
  String? get type => _$this._type;
  set type(String? type) => _$this._type = type;

  ListBuilder<GICharacter>? _characters;
  ListBuilder<GICharacter> get characters =>
      _$this._characters ??= new ListBuilder<GICharacter>();
  set characters(ListBuilder<GICharacter>? characters) =>
      _$this._characters = characters;

  VersionsEntityBuilder? _version;
  VersionsEntityBuilder get version =>
      _$this._version ??= new VersionsEntityBuilder();
  set version(VersionsEntityBuilder? version) => _$this._version = version;

  WeaponBuilder() {
    Weapon._defaults(this);
  }

  WeaponBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _name = $v.name;
      _createdAt = $v.createdAt;
      _updatedAt = $v.updatedAt;
      _description = $v.description;
      _iconUrl = $v.iconUrl;
      _rarity = $v.rarity;
      _effect = $v.effect;
      _type = $v.type;
      _characters = $v.characters?.toBuilder();
      _version = $v.version?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(Weapon other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$Weapon;
  }

  @override
  void update(void Function(WeaponBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  Weapon build() => _build();

  _$Weapon _build() {
    _$Weapon _$result;
    try {
      _$result = _$v ??
          new _$Weapon._(
              id: BuiltValueNullFieldError.checkNotNull(id, r'Weapon', 'id'),
              name: BuiltValueNullFieldError.checkNotNull(
                  name, r'Weapon', 'name'),
              createdAt: BuiltValueNullFieldError.checkNotNull(
                  createdAt, r'Weapon', 'createdAt'),
              updatedAt: BuiltValueNullFieldError.checkNotNull(
                  updatedAt, r'Weapon', 'updatedAt'),
              description: description,
              iconUrl: BuiltValueNullFieldError.checkNotNull(
                  iconUrl, r'Weapon', 'iconUrl'),
              rarity: BuiltValueNullFieldError.checkNotNull(
                  rarity, r'Weapon', 'rarity'),
              effect: BuiltValueNullFieldError.checkNotNull(
                  effect, r'Weapon', 'effect'),
              type: BuiltValueNullFieldError.checkNotNull(
                  type, r'Weapon', 'type'),
              characters: _characters?.build(),
              version: _version?.build());
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'characters';
        _characters?.build();
        _$failedField = 'version';
        _version?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'Weapon', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
