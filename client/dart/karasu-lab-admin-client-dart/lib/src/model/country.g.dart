// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'country.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$Country extends Country {
  @override
  final String id;
  @override
  final String name;
  @override
  final String? description;
  @override
  final String? sumbnailUrl;
  @override
  final DateTime createdAt;
  @override
  final DateTime updatedAt;
  @override
  final BuiltList<GICharacter>? characters;
  @override
  final VersionsEntity? version;

  factory _$Country([void Function(CountryBuilder)? updates]) =>
      (new CountryBuilder()..update(updates))._build();

  _$Country._(
      {required this.id,
      required this.name,
      this.description,
      this.sumbnailUrl,
      required this.createdAt,
      required this.updatedAt,
      this.characters,
      this.version})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(id, r'Country', 'id');
    BuiltValueNullFieldError.checkNotNull(name, r'Country', 'name');
    BuiltValueNullFieldError.checkNotNull(createdAt, r'Country', 'createdAt');
    BuiltValueNullFieldError.checkNotNull(updatedAt, r'Country', 'updatedAt');
  }

  @override
  Country rebuild(void Function(CountryBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  CountryBuilder toBuilder() => new CountryBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is Country &&
        id == other.id &&
        name == other.name &&
        description == other.description &&
        sumbnailUrl == other.sumbnailUrl &&
        createdAt == other.createdAt &&
        updatedAt == other.updatedAt &&
        characters == other.characters &&
        version == other.version;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, description.hashCode);
    _$hash = $jc(_$hash, sumbnailUrl.hashCode);
    _$hash = $jc(_$hash, createdAt.hashCode);
    _$hash = $jc(_$hash, updatedAt.hashCode);
    _$hash = $jc(_$hash, characters.hashCode);
    _$hash = $jc(_$hash, version.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'Country')
          ..add('id', id)
          ..add('name', name)
          ..add('description', description)
          ..add('sumbnailUrl', sumbnailUrl)
          ..add('createdAt', createdAt)
          ..add('updatedAt', updatedAt)
          ..add('characters', characters)
          ..add('version', version))
        .toString();
  }
}

class CountryBuilder implements Builder<Country, CountryBuilder> {
  _$Country? _$v;

  String? _id;
  String? get id => _$this._id;
  set id(String? id) => _$this._id = id;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  String? _description;
  String? get description => _$this._description;
  set description(String? description) => _$this._description = description;

  String? _sumbnailUrl;
  String? get sumbnailUrl => _$this._sumbnailUrl;
  set sumbnailUrl(String? sumbnailUrl) => _$this._sumbnailUrl = sumbnailUrl;

  DateTime? _createdAt;
  DateTime? get createdAt => _$this._createdAt;
  set createdAt(DateTime? createdAt) => _$this._createdAt = createdAt;

  DateTime? _updatedAt;
  DateTime? get updatedAt => _$this._updatedAt;
  set updatedAt(DateTime? updatedAt) => _$this._updatedAt = updatedAt;

  ListBuilder<GICharacter>? _characters;
  ListBuilder<GICharacter> get characters =>
      _$this._characters ??= new ListBuilder<GICharacter>();
  set characters(ListBuilder<GICharacter>? characters) =>
      _$this._characters = characters;

  VersionsEntityBuilder? _version;
  VersionsEntityBuilder get version =>
      _$this._version ??= new VersionsEntityBuilder();
  set version(VersionsEntityBuilder? version) => _$this._version = version;

  CountryBuilder() {
    Country._defaults(this);
  }

  CountryBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _name = $v.name;
      _description = $v.description;
      _sumbnailUrl = $v.sumbnailUrl;
      _createdAt = $v.createdAt;
      _updatedAt = $v.updatedAt;
      _characters = $v.characters?.toBuilder();
      _version = $v.version?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(Country other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$Country;
  }

  @override
  void update(void Function(CountryBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  Country build() => _build();

  _$Country _build() {
    _$Country _$result;
    try {
      _$result = _$v ??
          new _$Country._(
              id: BuiltValueNullFieldError.checkNotNull(id, r'Country', 'id'),
              name: BuiltValueNullFieldError.checkNotNull(
                  name, r'Country', 'name'),
              description: description,
              sumbnailUrl: sumbnailUrl,
              createdAt: BuiltValueNullFieldError.checkNotNull(
                  createdAt, r'Country', 'createdAt'),
              updatedAt: BuiltValueNullFieldError.checkNotNull(
                  updatedAt, r'Country', 'updatedAt'),
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
            r'Country', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
